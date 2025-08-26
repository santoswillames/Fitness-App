import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

interface TabBarButtonProps extends BottomTabBarButtonProps {
  icon: React.ReactNode;
}

export const TabBarButton: React.FC<TabBarButtonProps> = ({
  onPress,
  icon,
  "aria-selected": ariaSelected,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View
        style={[
          styles.button,
          { backgroundColor: ariaSelected ? "#fff" : "#2C263A61" },
        ]}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
};
