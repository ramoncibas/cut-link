import React from "react";
import { View, Text } from "react-native";

import StatusBarPage from "../components/StatusBarPage";
import Menu from "../components/Menu";

export default function MyLinks () {
  return (
    <View>
        <StatusBarPage 
          barStyle="light-content"
          backgroundColor="#132742"
        />

        <Menu/>
      <Text>Pagina de Links</Text>
    </View>
  );
}