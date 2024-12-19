import { View, Text } from "react-native";
import React from "react";
const username = "Grish Joshi123";
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const divide = (a, b) => a / b;
const NameComponent = () => {
  return (
    <View>
      <Text> My Name is {username} and i love coding.</Text>
      <Text>My Roll no. is 18+2={18 + 2}</Text>
      <Text>multiply of 18*2={18 * 2}</Text>
      <Text>multiply of 18 and 2={multiply(18, 2)}</Text>
      <Text>add of 18 and 2={add(18, 2)}</Text>
      <Text>divide of 18 and 2={divide(18, 2)}</Text>
    </View>
  );
};

export default NameComponent;
