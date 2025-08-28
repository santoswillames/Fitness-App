import React from "react";
import { View, Text } from "react-native";
import Logo from "../../assets/svgs/logo.svg";
import { GradientText } from "../../components/gradientText";
import { Button, ButtonText } from "components/ui/button";
import { VStack } from "components/ui/vstack";
import { Box } from "components/ui/box";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";


export function WelcomeScreen() {
  const navigation = useAuthNavigation();

  const handleNavigatorLogin =  () => {
    navigation.navigate("Login");
  };

  const handleNavigatorRegister = () => {
    navigation.navigate("Register");
  };
  
  return (
    <VStack className="flex-1">
     <Box className="w-full items-center justify-end h-full">
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

      <VStack className="w-full gap-4 mt-12">
        <Button className=" rounded-full h-[58px]  bg-[#494358]" onPress={handleNavigatorLogin}>
          <ButtonText className="font-montserrat-semibold text-white">Login</ButtonText>
        </Button>
        <Button className="bg-white rounded-full h-[58px]" onPress={handleNavigatorRegister}>
          <ButtonText className="font-montserrat-semibold text-[#1E232C]">Register</ButtonText>
        </Button>
      </VStack>
      <Button variant="link" className="mt-[18px] ">
        <ButtonText className="font-montserrat-bold underline decoration-solid text-white">Continue as a guest</ButtonText>
      </Button>
     </Box>
     
    </VStack>
  );
}
