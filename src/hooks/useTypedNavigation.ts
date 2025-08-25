import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  AuthStackParamList,
  OnboardingStackParamList,
  MainTabParamList,
} from "../navigation/types";

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type OnboardingNavigationProp =
  NativeStackNavigationProp<OnboardingStackParamList>;
export type MainNavigationProp = BottomTabNavigationProp<MainTabParamList>;

export const useAuthNavigation = () => useNavigation<AuthNavigationProp>();
export const useOnboardingNavigation = () =>
  useNavigation<OnboardingNavigationProp>();
export const useMainNavigation = () => useNavigation<MainNavigationProp>();
