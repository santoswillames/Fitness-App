import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import OnboardingNavigator from "./OnboardingNavigator";
import MainNavigator from "./MainNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { MapScreen } from "../screens/map/MapScreen";
import { SuccessScreen } from "../screens/success/Success";
import { WorkoutScreen } from "../screens/workout/WorkoutScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const isAuthenticated = true;
  const hasCompletedOnboarding = false;

  // Define qual stack deve abrir primeiro
  const initialRoute = !isAuthenticated
    ? "Auth"
    : !hasCompletedOnboarding
    ? "Onboarding"
    : "Main";

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
        <RootStack.Screen name="Main" component={MainNavigator} />
        <RootStack.Screen name="Map" component={MapScreen} />
        <RootStack.Screen name="Workout" component={WorkoutScreen} />
        <RootStack.Screen name="Success" component={SuccessScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
