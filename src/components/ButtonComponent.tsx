import { View, Text, Button, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Button
        title="Press me"
        color={"gray"}
        onPress={() => alert("Pressed")}
      />
    </View>
  );
};

export default ButtonComponent;
