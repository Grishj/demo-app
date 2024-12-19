import { View, Text } from "react-native";
import React from "react";
import Greet from "../components/Greet";
import NameComponent from "../components/NameComponent";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";
const Index = () => {
  return (
    <View>
      <ImageComponent />
      <NameComponent />
      <ButtonComponent />
    </View>
  );
};

export default Index;
