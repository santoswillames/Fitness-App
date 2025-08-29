import React from "react";
import {  Text } from "react-native";
import { VStack } from "components/ui/vstack";
import { Button, ButtonText } from "components/ui/button";
import { Input, InputField } from "components/ui/input";
import { Box } from "components/ui/box";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";
import { AuthHeader } from "screens/auth/components/headerAuth";

export function ForgotScreen() {
  const navigation = useAuthNavigation();

  const handleSendCode = () => {
    // Aqui a gente vai concetar ao service de envio de código
    navigation.navigate("OtpVerification");
  };

  const handleNavigatorLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <VStack className="flex-1 justify-between items-center">
      <Box className="flex-1">
        <AuthHeader>
          <AuthHeader.Title>Forgot Password?</AuthHeader.Title>
          <AuthHeader.Subtitle>
            Don't worry! It occurs. Please enter the email address linked with your account.
          </AuthHeader.Subtitle>
        </AuthHeader>     

          <Input
            variant="rounded"
            className="h-14 bg-[#494358] border-0 mt-[33px]"
          >
            <InputField placeholder="Email" className="font-montserrat-medium text-[13px] text-white"/>
          </Input>

        <Button className="bg-white rounded-full h-[58px] mt-[60px]" onPress={handleSendCode}>
          <ButtonText className="font-montserrat-semibold text-[#1E232C]">Send Code</ButtonText>
        </Button>
      </Box>

      <Box className=" flex-row items-center gap-1">
        <Text className="text-white text-sm font-urbanist-regular">Remember Password?</Text>
        <Button variant="link" className="self-end" onPress={handleNavigatorLogin}>
          <ButtonText className="font-urbanist-bold text-sm text-[#F5F3BC]">Login</ButtonText>
        </Button>
      </Box>

    </VStack>
  );
}
