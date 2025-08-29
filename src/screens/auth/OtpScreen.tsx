import React from "react";
import {  Text } from "react-native";
import { VStack } from "components/ui/vstack";
import { Button, ButtonText } from "components/ui/button";
import { Box } from "components/ui/box";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";
import { AuthHeader } from "screens/auth/components/headerAuth";
import { OtpInput } from "./components/inputOtp";
import { HStack } from "components/ui/hstack";
import { Input, InputField } from "components/ui/input";

export function OtpScreen() {
   const navigation = useAuthNavigation();
  
    const handleVerifyCode = () => {
      // Aqui a gente vai concetar ao service de verificar o código
      navigation.navigate("ResetPassword");
    };
  
    const handleResendCode = () => {
      //Aqui a  gente reenviar o código
    };
  return (
    <VStack className="flex-1 justify-between items-center">
      <Box className="flex-1">
        <AuthHeader>
          <AuthHeader.Title>OTP Verification</AuthHeader.Title>
          <AuthHeader.Subtitle>
            Enter the verification code we just sent on your email address.
          </AuthHeader.Subtitle>
        </AuthHeader>     

        <Box className="mt-9">
          <OtpInput />
        </Box>

        <Button className="bg-white rounded-full h-[58px] mt-[60px]" onPress={handleVerifyCode}>
          <ButtonText className="font-montserrat-semibold text-[#1E232C]">Verify</ButtonText>
        </Button>
      </Box>

      <Box className=" flex-row items-center gap-1">
        <Text className="text-white text-sm font-urbanist-regular">Didn’t received code?</Text>
        <Button variant="link" className="self-end" onPress={handleResendCode}>
          <ButtonText className="font-urbanist-bold text-sm text-[#F5F3BC]">Resend</ButtonText>
        </Button>
      </Box>
    </VStack>
  );
}
