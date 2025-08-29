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

export function Register() {
  const navigation = useAuthNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((showState) => {
      return !showState;
    });
  };

  const handleRegister = async () => {
    try {
      // Aqui a gente vai concetar ao service de registro
    } catch (error) {
      Alert.alert("Erro", "Erro ao registrar");
    }
  };

  const handleNavigatorLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}  >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <VStack className="flex-1 justify-between items-center">
        <Box className="flex-1">
          <AuthHeader>
            <AuthHeader.Logo />
            <AuthHeader.Title>Hello! Register to get started</AuthHeader.Title>
          </AuthHeader>

          <Box className="gap-4 mt-[23px]">
            <Input
              variant="rounded"
              className="h-14 bg-[#494358] border-0"
            >
              <InputField placeholder="Username" className="font-montserrat-medium text-[13px] text-white"/>
            </Input>

            <Input
              variant="rounded"
              className="h-14 bg-[#494358] border-0"
            >
              <InputField placeholder="Email" className="font-montserrat-medium text-[13px] text-white"/>
            </Input>

            <Input
              variant="rounded"
              className="h-14 bg-[#494358] border-0"
            >
              <InputField 
                placeholder="Password" 
                className="font-montserrat-medium text-[13px] text-white"
                type={showPassword ? 'text' : 'password'}
              />
              <InputSlot className="pr-3" onPress={handleShowPassword}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>

            <Input
              variant="rounded"
              className="h-14 bg-[#494358] border-0"
            >
              <InputField
                placeholder="Confirm password"
                className="font-montserrat-medium text-[13px] text-white"
                type={showConfirmPassword ? 'text' : 'password'}
              />
              <InputSlot className="pr-3" onPress={handleShowConfirmPassword}>
                <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>

          </Box>

          <Button className="bg-white rounded-full h-[58px] mt-8" onPress={handleRegister}>
            <ButtonText className="font-montserrat-semibold text-[#1E232C]">Register</ButtonText>
          </Button>
        </Box>

          <Box className=" flex-row items-center gap-1">
            <Text className="text-white text-sm font-urbanist-regular">Already have an account?</Text>
            <Button variant="link" className="self-end" onPress={handleNavigatorLogin}>
              <ButtonText className="font-urbanist-bold text-sm text-[#F5F3BC]">Login Now</ButtonText>
            </Button>
          </Box>

        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
