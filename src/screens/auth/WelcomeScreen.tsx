import React from "react";
import { View, Text } from "react-native";
import Logo from '../../assets/svgs/logo.svg'

export function WelcomeScreen() {
  return (
    <View>
      <Logo />
      <Text className="text-white font-montserrat-bold text-[31px]">Start your</Text>
      <View>
        <Text className="text-white font-montserrat-bold text-[31px]">Fitness</Text>
        <Text className="text-white font-montserrat-bold text-[31px]">Journey</Text>
      </View>
    </View>
  );
}
