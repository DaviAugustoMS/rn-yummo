import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { colors, spacing, radius, typography } from "../../theme";

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  theme?: "light" | "dark";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  style,
  textStyle,
  theme = "light"
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: colors[theme].primary,
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          borderRadius: radius.md,
          alignItems: "center"
        },
        style
      ]}
    >
      <Text
        style={[
          { color: colors[theme].text, ...typography.body },
          textStyle
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
