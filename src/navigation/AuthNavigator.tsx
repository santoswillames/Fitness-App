import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";

import { LoginScreen } from "../screens/auth/LoginScreen";
import { Register } from "../screens/auth/RegisterScreen";
import { ForgotScreen } from "../screens/auth/ForgotScreen";
import { OtpScreen } from "../screens/auth/OtpScreen";
import { ResetPasswordScreen } from "../screens/auth/ResetPasswordScreen";
import { ResetPasswordSuccessScreen } from "../screens/auth/ResetPasswordSuccessScreen";
import { WelcomeScreen } from "../screens/auth/WelcomeScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#262135", paddingHorizontal: 23, paddingBottom: 58},
      }}
    >
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotScreen} />
      <AuthStack.Screen name="OtpVerification" component={OtpScreen} />
      <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <AuthStack.Screen
        name="ResetPasswordSuccess"
        component={ResetPasswordSuccessScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
