import React from "react";
import {  Text } from "react-native";
import { VStack } from "components/ui/vstack";
import { Button, ButtonText } from "components/ui/button";
import { Input, InputField } from "components/ui/input";
import { Box } from "components/ui/box";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";
import { AuthHeader } from "screens/auth/components/headerAuth";

export function ResetPasswordScreen() {
  const navigation = useAuthNavigation();
    
  const handleResetPassword = () => {
    // Aqui a gente vai concetar ao service de verificar o código
    navigation.navigate("ResetPasswordSuccess");
  };

  return (
    <VStack className="flex-1 justify-between items-center">
      <Box className="flex-1">
        <AuthHeader>
          <AuthHeader.Title>Create new password</AuthHeader.Title>
          <AuthHeader.Subtitle>
            Your new password must be unique from those previously used.
          </AuthHeader.Subtitle>
        </AuthHeader>     

        <Box className="gap-5 mt-[27px]">
          <Input
            variant="rounded"
            className="h-14 bg-[#494358] border-0"
          >
            <InputField placeholder="New Password" className="font-montserrat-medium text-[13px] text-white"/>
          </Input>

          <Input
            variant="rounded"
            className="h-14 bg-[#494358] border-0"
          >
            <InputField placeholder="Confirm Password" className="font-montserrat-medium text-[13px] text-white"/>
          </Input>
        </Box>

        <Button className="bg-white rounded-full h-[58px] mt-[54px]" onPress={handleResetPassword}>
          <ButtonText className="font-montserrat-semibold text-[#1E232C]">Reset Password</ButtonText>
        </Button>
      </Box>

    
    </VStack>
  );
}
