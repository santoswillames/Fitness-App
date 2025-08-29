import React from "react";
import { Text } from "react-native";
import SuccessIcon from '../../assets/svgs/successmark.svg'
import { VStack } from "components/ui/vstack";
import { Box } from "components/ui/box";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";
import { Button, ButtonText } from "components/ui/button";

export function ResetPasswordSuccessScreen() {
  const navigation = useAuthNavigation();
      
  const handleBackToLogin = () => {
    // Aqui a gente vai concetar ao service de verificar o código
    navigation.navigate("Login");
  };

  return (
    <VStack className="flex-1 items-center justify-center gap-9">
      <SuccessIcon />
      <Box className="items-center gap-2">
        <Text className="text-white font-urbanist-bold text-[26px]">Password Changed!</Text>
        <Text className="text-[#FFFFFFA3] text-[15px] font-urbanist-medium text-center">Your password has been changed successfully.</Text>
      </Box>

      <Button className="bg-white rounded-full w-full h-[58px] " onPress={handleBackToLogin}>
        <ButtonText className="font-montserrat-semibold text-[#1E232C]">Back to Login</ButtonText>
      </Button>
    </VStack>
  );
}
