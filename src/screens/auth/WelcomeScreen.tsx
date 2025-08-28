import React from "react";
import { View, Text } from "react-native";
import Logo from "../../assets/svgs/logo.svg";
import { GradientText } from "../../components/gradientText";
import { Button, ButtonText } from "components/ui/button";

export function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Logo />

      <Text className=" text-blue-50 font-montserrat-bold text-[33px] mt-[31px]">
        Start your
      </Text>

      <View className="flex-row gap-3">
       <GradientText
        colors={["#F6F3BA", "#D6EBEB"]} 
        className=" font-montserrat-bold text-[33px]"
        >
          Fitness
        </GradientText>

        <Text className=" text-blue-50 font-montserrat-bold text-[33px]">
          Journey
        </Text>
      </View>

      <Button variant="solid" size="md" action="primary">
        <ButtonText>Click me</ButtonText>
      </Button>
     
    </View>
  );
}
