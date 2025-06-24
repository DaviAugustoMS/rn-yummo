import React from "react";
import { View, ViewStyle } from "react-native";
import { colors } from "../../theme";

interface DividerProps {
  style?: ViewStyle;
  theme?: "light" | "dark";
}

export const Divider: React.FC<DividerProps> = ({ style, theme = "light" }) => {
  return (
    <View
      style={[
        {
          height: 1,
          backgroundColor: colors[theme].border,
          width: "100%"
        },
        style
      ]}
    />
  );
};
