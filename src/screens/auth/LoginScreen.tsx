import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert,
} from "react-native";
import { Button, ButtonText } from "components/ui/button";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";
import { VStack } from "components/ui/vstack";
import { Box } from "components/ui/box";
import { Input, InputField, InputIcon, InputSlot } from "components/ui/input";
import { AuthHeader } from "./components/headerAuth";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

export function LoginScreen() {
  const navigation = useAuthNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleLogin = async () => {
    try {
      // Aqui a gente vai concetar ao service de login
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  };

  const handleNavigatorForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleNavigatorRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}  >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <VStack className="flex-1 justify-between items-center">
        <Box className="flex-1 justify-center">
          <AuthHeader>
            <AuthHeader.Logo />
            <AuthHeader.Title>Welcome back! Glad to see you, Again!</AuthHeader.Title>
          </AuthHeader>

          <Box className="gap-4 mt-8">
            <Input
              variant="rounded"
              className="h-14 bg-[#494358] border-0"
            >
              <InputField placeholder="Enter your email" className="font-montserrat-medium text-[13px] text-white"/>
            </Input>

            <Input
              variant="rounded"
              className="h-14 bg-[#494358] border-0"
            >
              <InputField 
                placeholder="Enter your password" 
                className="font-montserrat-medium text-[13px] text-white"
                type={showPassword ? 'text' : 'password'}
              />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>

            <Button variant="link" className="self-end" onPress={handleNavigatorForgotPassword}>
              <ButtonText className="font-montserrat-semibold text-xs text-white">Forgot Password?</ButtonText>
            </Button>
          </Box>

          <Button className="bg-white rounded-full h-[58px] mt-8" onPress={handleLogin}>
            <ButtonText className="font-montserrat-semibold text-[#1E232C]">Login</ButtonText>
          </Button>
        </Box>

          <Box className=" flex-row items-center gap-1">
            <Text className="text-white text-sm ">Don’t have an account?</Text>
            <Button variant="link" className="self-end" onPress={handleNavigatorRegister}>
              <ButtonText className="font-montserrat-semibold text-sm text-[#F5F3BC]">Register Now</ButtonText>
            </Button>
          </Box>

        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}


