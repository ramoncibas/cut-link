import React from "react";

// Imported components from /styles
import { Container, Title, ListLinks } from "./styles";

// Imported components from /components
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import ListItem from "../../components/ListItem";

export default function MyLinks() {
  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />

      <Title>Meus Links</Title>
      <ListLinks
        data={[{ id: 1, link: "google.com" }]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={ false }
      />
    </Container>
  );
}
