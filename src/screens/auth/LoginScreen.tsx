import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Logo from "../../assets/svgs/logo.svg";
import { Button, ButtonText } from "components/ui/button";
import { useAuthNavigation } from "../../hooks/useTypedNavigation";
import { VStack } from "components/ui/vstack";
import { Box } from "components/ui/box";
import { Input, InputField } from "components/ui/input";
import { HeaderLogin } from "components/headerLogin";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useAuthNavigation();

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
    <VStack className="flex-1 justify-between items-center">
     <Box className="flex-1 justify-center">
        <Logo width={46} height={46}/>
        <Text className="text-white font-montserrat-bold text-[30px] mt-6 mb-8 ">Welcome back! Glad to see you, Again!</Text>

        <Box className="gap-4">
          <Input
            variant="rounded"
            className="h-14 bg-[#494358]"
          >
            <InputField placeholder="Enter your email" className="font-montserrat-medium text-[13px]"/>
          </Input>

          <Input
            variant="rounded"
            className="h-14 bg-[#494358]"
          >
            <InputField placeholder="Enter your password" className="font-montserrat-medium text-[13px]"/>
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
  );
}


