import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://www.holidaystonepal.in/media/files/MountKailash/KYMMalaysia/Kailash-Mansarovar-Yatra-from-Malaysia-via-Nepal.png",
        }}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default ImageComponent;
