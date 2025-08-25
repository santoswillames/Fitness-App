import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";

import { HomeScreen } from "../screens/main/HomeScreen";
import { SettingsScreen } from "../screens/main/SettingsScreen";
import { ScheduleScreen } from "../screens/main/ScheduleScreen";
import { StatisticsScreen } from "../screens/main/StatisticsScreen";

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={{ headerShown: false }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
        }}
      />
      <MainTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: "Agenda",
        }}
      />
      <MainTab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          title: "Estatísticas",
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Configurações",
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
