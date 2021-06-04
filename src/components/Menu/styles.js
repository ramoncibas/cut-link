import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

export const ButtonMenu = styled.TouchableOpacity`
  position: absolute;
  top: ${ Platform.OS === "ios" ? StatusBar.currentHeight + 60+"px" : 13+"px" };
  margin: 0 20px;
  justify-content: space-around;
`;