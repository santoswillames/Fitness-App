import React from "react";
import { Text, TextProps } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

type GradientTextProps = TextProps & {
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children: React.ReactNode;
};

export function GradientText({
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  children,
  style,
  ...rest
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text {...rest} style={style}>
          {children}
        </Text>
      }
    >
      <LinearGradient colors={colors} start={start} end={end}>
        {/* Esse Text invisível garante altura/espacamento correto */}
        <Text {...rest} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
