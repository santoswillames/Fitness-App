import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";

import { HomeScreen } from "../screens/main/HomeScreen";
import { SettingsScreen } from "../screens/main/SettingsScreen";
import { ScheduleScreen } from "../screens/main/ScheduleScreen";
import { StatisticsScreen } from "../screens/main/StatisticsScreen";

import HomeIcon from "../assets/menu.svg";
import SettingsIcon from "../assets/settings.svg";
import ScheduleIcon from "../assets/calendar.svg";
import StatisticsIcon from "../assets/charts.svg";

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          if (route.name === "Home") {
            return <HomeIcon width={size} height={size} fill={color} />;
          } else if (route.name === "Settings") {
            return <SettingsIcon width={size} height={size} fill={color} />;
          } else if (route.name === "Schedule") {
            return <ScheduleIcon width={size} height={size} fill={color} />;
          } else if (route.name === "Statistics") {
            return <StatisticsIcon width={size} height={size} fill={color} />;
          }
        },
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
      })}
    >
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
