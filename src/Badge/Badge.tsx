import React from "react";
import { Text, View, ViewStyle, TextStyle } from "react-native";
import { colors, radius, spacing, typography } from "../../theme";

interface BadgeProps {
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  theme?: "light" | "dark";
}

export const Badge: React.FC<BadgeProps> = ({ label, style, textStyle, theme = "light" }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors[theme].secondary,
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.xs,
          borderRadius: radius.full,
          alignSelf: "flex-start"
        },
        style
      ]}
    >
      <Text style={[{ color: colors[theme].text, fontSize: 12 }, textStyle]}>{label}</Text>
    </View>
  );
};
