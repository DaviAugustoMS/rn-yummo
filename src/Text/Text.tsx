import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { typography, colors } from "../../theme";

type Variant = "title" | "body" | "caption";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  variant?: Variant;
  theme?: "light" | "dark";
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  theme = "light",
  style,
  ...rest
}) => {
  return (
    <RNText
      style={[{ color: colors[theme].text, ...typography[variant] }, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};
