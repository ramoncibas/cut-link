import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Modal, ActivityIndicator } from "react-native";

// Imported components from /components
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import ListItem from "../../components/ListItem";
import ModalLink from "../../components/ModalLink";

import { getLinksSave, deleteLink } from "../../utils/storeLinks"

// Imported components from /styles
import { Container, Title, ListLinks, ContainerEmpty, WarningText } from "./styles";

export default function MyLinks() {
  const isFocused = useIsFocused();

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Passing the data from the local storage when this page is in "focus"
  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("cutlink");
      setLinks(result);
      setLoading(false);
    }

    getLinks();
  }, [isFocused]);

  // Rendering the modal with the list information
  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  // Delete link by id from AsyncStorage
  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />

      <Title>Meus Links</Title>

      { loading && (
        <ContainerEmpty>
          <ActivityIndicator color="#fff" size={25}/>
        </ContainerEmpty>
      )
      
      }
      { !loading && links.length === 0 && (
          <ContainerEmpty>
            <WarningText>Você ainda não possui nenhum Link :(</WarningText>
          </ContainerEmpty>
        )
      }

      <ListLinks
        data={ links }
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete}/>}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={ modalVisible } transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
}