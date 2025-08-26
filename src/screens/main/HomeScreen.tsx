import React from "react";
import { Text, View } from "react-native";
import { Fonts } from "../../styles/fonts";

export function HomeScreen() {
  return (
    <View>
      <Text style={{ fontFamily: Fonts.montserrat.bold, fontSize: 32 }}>
        Home
      </Text>
    </View>
  );
}
