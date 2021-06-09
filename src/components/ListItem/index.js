import React from "react";
import { View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { Feather } from "@expo/vector-icons";
import { ContainerButton, Link, ActionContainer } from "./styles";

export default function ListItem({ data, selectedItem, deleteItem }) {
  function RightActions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color="#fff" size={24} />
      </ActionContainer>
    )
  }
  
  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.8} onPress={() => selectedItem(data)}>
          <Feather name="link" color="#fff" size={24} />
          <Link numberOfLines={1}>{data.long_url}</Link>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}
