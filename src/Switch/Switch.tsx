import React from "react";
import { Switch as RNSwitch } from "react-native";
import { colors } from "../../theme";

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  theme?: "light" | "dark";
}

export const Switch: React.FC<SwitchProps> = ({ value, onValueChange, theme = "light" }) => {
  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false: colors[theme].border,
        true: colors[theme].primary
      }}
      thumbColor="#fff"
    />
  );
};
