import React from "react";
import { View, Text, Image } from "react-native";
import { useOnboardingNavigation } from "../../hooks/useTypedNavigation";
import { Button, ButtonText } from "components/ui/button";
import ArrowWelcomeIcon from '../../assets/svgs/arrow-welcome.svg'
import { Box } from "components/ui/box";

export function OnboardingStartScreen() {
  const navigation = useOnboardingNavigation();

  const handleFinish = async () => {
    navigation.navigate("OnboardingStep1");
  };

  return (
    <View className="flex-1 bg-[#262135] relative">
      
      <View className="w-[289px] mt-[50px] ml-[40px]">
        <Text className="text-white text-[33px] font-montserrat-bold">
          Start your Fitness Journey
        </Text>
        <Text className="text-white font-montserrat-regular mt-5 text-sm">
          Start your fitness journey 
        </Text>
        <Text className="text-white font-montserrat-regular text-sm">
           with our app's guidance and support.
        </Text>
      </View>

      <Box className="absolute left-[29px] top-[271px]">
        <ArrowWelcomeIcon  />
      </Box>

      <Image
        source={require("../../assets/images/woman.png")} 
        className="absolute right-0 bottom-0 h-[80%] w-[70%] object-contain"
        resizeMode="contain"
      />

      
      <View className="absolute bottom-28 left-[77px] bg-[#E8E8E8] rounded-2xl p-4 w-[165px] h-[204px] shadow-lg">
        <Text className="text-gray-500 text-sm">Drink</Text>
        <Text className="text-black text-lg font-bold">150 ml</Text>
      
      </View>

   
      <View className="absolute bottom-10 left-6 right-6">
        <Button className="rounded-full bg-white" onPress={handleFinish}>
          <ButtonText className="text-black font-semibold">Let's start</ButtonText>
        </Button>
      </View>
    </View>
  );
}


