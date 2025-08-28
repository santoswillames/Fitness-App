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

  return (
    <VStack className="flex-1">
      <Logo width={46} height={46}/>
      <Text className="text-white font-montserrat-bold text-[30px] mt-6 mb-8 ">Welcome back! Glad to see you, Again!</Text>

      <Button className=" rounded-full h-[58px]" onPress={handleLogin}>
        <ButtonText className="font-montserrat-semibold">Login</ButtonText>
      </Button>

    </VStack>
  );
}


