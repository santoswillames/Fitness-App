import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";

import { HomeScreen } from "../screens/main/HomeScreen";
import { SettingsScreen } from "../screens/main/SettingsScreen";
import { ScheduleScreen } from "../screens/main/ScheduleScreen";
import { StatisticsScreen } from "../screens/main/StatisticsScreen";

import HomeIcon from "../assets/svgs/menu.svg";
import SettingsIcon from "../assets/svgs/settings.svg";
import ScheduleIcon from "../assets/svgs/calendar.svg";
import StatisticsIcon from "../assets/svgs/charts.svg";
import { TabBarButton } from "../components/tabBarButton";
import { View } from "react-native";

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute", // deixa flutuante
          height: 90,
          borderRadius: 90,
          marginBottom: 31,
          marginHorizontal: 17,
          backgroundColor: "transparent", // importante!
          elevation: 0, // remove sombra no Android, se quiser customizar
          borderTopWidth: 0, // remove linha no iOS
        },
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#5A556B", // cor de fundo real
              borderRadius: 90,
            }}
          />
        ),
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              icon={
                <HomeIcon
                  color={props["aria-selected"] ? "#262135" : "#D9D9D961"}
                />
              }
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              icon={
                <ScheduleIcon
                  color={props["aria-selected"] ? "#262135" : "#D9D9D961"}
                />
              }
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              icon={
                <StatisticsIcon
                  color={props["aria-selected"] ? "#262135" : "#D9D9D961"}
                />
              }
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              icon={
                <SettingsIcon
                  color={props["aria-selected"] ? "#262135" : "#D9D9D961"}
                />
              }
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
