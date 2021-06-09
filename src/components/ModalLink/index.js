import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";

// Imported components from /styles
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
} from "./styles";

export default function ModalLink({ onClose, data }) {

  // Function to Copy the Link
  function copyLink() {
    Clipboard.setString(data.link);
    alert("Link copiado com sucesso!");
  }

  // Function to Share the Link
  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Activity Type");
        } else {
          console.log("Successfully Shared!");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Closed Modal!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={ onClose }>
      {/* This "View" is being used so that the screen size is split evenly with the Modal */}
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={ onClose }>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={ copyLink }>
            <ShortLinkUrl numberOfLines={1}>
              {data.link}
            </ShortLinkUrl>
            <TouchableOpacity onPress={ copyLink }>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}