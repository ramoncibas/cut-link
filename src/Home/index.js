import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from "./styles"

import StatusBarPage from "../components/StatusBarPage";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <LinearGradient
      colors={["#1ddbb9", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBarPage 
        barStyle="ligh-content"
        backgroundColor="#1ddbb9"
      />

      <Menu />

      <ContainerLogo>
        <Logo  source={require("../assets/logo.svg")} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>CutLink</Title>
        <SubTitle>Cole seu Link para encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size ={22} color="#fff"/>
          </BoxIcon>

          <Input
            placeholder="Cole seu link aqui..."
            placeholderTextColor="#fff"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>

      </ContainerContent>
    </LinearGradient>
  );
}