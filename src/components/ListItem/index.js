import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ContainerButton, Link } from "./styles";

export default function ListItem() {
  return (
    <View>
      <ContainerButton activeOpacity={0.8} onPress={() => alert("Link Clicado")}>
        <Feather name="link" color="#fff" size={24} />
        <Link numberOfLines={1}>https://youtube.com</Link>
      </ContainerButton>
    </View>
  );
}