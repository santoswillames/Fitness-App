import React from "react";
import { View, Text } from "react-native";
import Logo from "../../../../assets/svgs/logo.svg";


type AuthHeaderProps = {
  children: React.ReactNode;
};

export function AuthHeader({ children }: AuthHeaderProps) {
  return (
    <View >
      {children}
    </View>
  );
}

function LogoSlot() {
  return <Logo width={46} height={46} />;
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <Text className="text-white font-montserrat-bold text-[30px] mt-6 mb-[13px]">
      {children}
    </Text>
  );
}

function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <Text className="font-montserrat-medium text-[#FFFFFFA3] text-[13px]">
      {children}
    </Text>
  );
}

// Composition pattern 👇
AuthHeader.Logo = LogoSlot;
AuthHeader.Title = Title;
AuthHeader.Subtitle = Subtitle;
