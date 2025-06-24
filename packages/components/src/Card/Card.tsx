import React from "react";
import { View, ViewStyle } from "react-native";
import { spacing, radius, colors } from "../../theme";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  theme?: "light" | "dark";
}

export const Card: React.FC<CardProps> = ({ children, style, theme = "light" }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors[theme].background,
          padding: spacing.md,
          borderRadius: radius.lg,
          borderWidth: 1,
          borderColor: colors[theme].border,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2
        },
        style
      ]}
    >
      {children}
    </View>
  );
};
