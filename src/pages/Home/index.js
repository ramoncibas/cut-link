import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

// Imported components from /styles
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";

// Imported components from /components
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import ModalLink from "../../components/ModalLink";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Function to generate a Short Link
  function handleShortLink() {
    setModalVisible(true);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage barStyle="ligh-content" backgroundColor="#1ddbb9" />

        <Menu />

        <KeyboardAvoidingView
          behavior={ Platform.OS === "android" ? "padding" : "position" }
          enabled={ true }
        >
          <ContainerLogo>
            <Logo
              source={ require("../../assets/logo.png") }
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>CutLink</Title>
            <SubTitle>Cole seu Link para encurtar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>

              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={ inputText }
                onChangeText={(text) => setInputText(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={ handleShortLink }>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={ modalVisible } transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}