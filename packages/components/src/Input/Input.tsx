import React, { useState, forwardRef } from 'react';
import {
  TextInput,
  View,
  Text,
  ViewStyle,
  TextStyle,
  TextInputProps,
  AccessibilityProps,
} from 'react-native';
import { colors, spacing, radius, typography, states } from '../../theme';

type InputVariant = 'outlined' | 'filled';
type InputSize = 'small' | 'medium' | 'large';

interface InputProps extends Omit<TextInputProps, 'style'>, AccessibilityProps {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: InputVariant;
  size?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
  theme?: 'light' | 'dark';
}

const getContainerStyles = (
  variant: InputVariant,
  size: InputSize,
  theme: 'light' | 'dark',
  hasError: boolean,
  isFocused: boolean
): ViewStyle => {
  const baseStyles: ViewStyle = {
    borderRadius: radius.md,
    borderWidth: variant === 'outlined' ? 1 : 0,
    backgroundColor: variant === 'filled' ? colors[theme].surfaceVariant : 'transparent',
  };

  // Size styles
  const sizeStyles: Record<InputSize, ViewStyle> = {
    small: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      minHeight: 36,
    },
    medium: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      minHeight: 48,
    },
    large: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      minHeight: 56,
    },
  };

  // Border color based on state
  let borderColor = colors[theme].border;
  if (hasError) {
    borderColor = colors[theme].error;
  } else if (isFocused) {
    borderColor = colors[theme].primary;
  }

  return {
    ...baseStyles,
    ...sizeStyles[size],
    borderColor,
  };
};

const getInputStyles = (
  size: InputSize,
  theme: 'light' | 'dark',
  hasLeftIcon: boolean,
  hasRightIcon: boolean
): TextStyle => {
  const baseStyles: TextStyle = {
    color: colors[theme].text,
    flex: 1,
  };

  // Size text styles
  const sizeTextStyles: Record<InputSize, TextStyle> = {
    small: {
      ...typography.bodySmall,
    },
    medium: {
      ...typography.bodyMedium,
    },
    large: {
      ...typography.bodyLarge,
    },
  };

  // Padding for icons
  const iconPadding: TextStyle = {
    paddingLeft: hasLeftIcon ? spacing.xs : 0,
    paddingRight: hasRightIcon ? spacing.xs : 0,
  };

  return {
    ...baseStyles,
    ...sizeTextStyles[size],
    ...iconPadding,
  };
};

export const Input = forwardRef<TextInput, InputProps>(({
  label,
  error,
  helperText,
  variant = 'outlined',
  size = 'medium',
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  helperStyle,
  theme = 'light',
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'text',
  ...rest
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;

  const containerStyles = getContainerStyles(variant, size, theme, hasError, isFocused);
  const inputStyles = getInputStyles(size, theme, !!leftIcon, !!rightIcon);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    rest.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    rest.onBlur?.(e);
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Text
          style={[
            {
              color: colors[theme].textSecondary,
              marginBottom: spacing.xs,
              ...typography.labelMedium,
            },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
      
      <View style={[containerStyles, { flexDirection: 'row', alignItems: 'center' }]}>
        {leftIcon && (
          <View style={{ marginRight: spacing.xs }}>
            {leftIcon}
          </View>
        )}
        
        <TextInput
          ref={ref}
          style={[inputStyles, inputStyle]}
          placeholderTextColor={colors[theme].textTertiary}
          onFocus={handleFocus}
          onBlur={handleBlur}
          accessibilityLabel={accessibilityLabel || label}
          accessibilityHint={accessibilityHint}
          accessibilityRole={accessibilityRole}
          accessibilityState={{ disabled: rest.editable === false }}
          {...rest}
        />
        
        {rightIcon && (
          <View style={{ marginLeft: spacing.xs }}>
            {rightIcon}
          </View>
        )}
      </View>
      
      {(error || helperText) && (
        <Text
          style={[
            {
              marginTop: spacing.xs,
              ...typography.bodySmall,
              color: error ? colors[theme].error : colors[theme].textSecondary,
            },
            error ? errorStyle : helperStyle,
          ]}
        >
          {error || helperText}
        </Text>
      )}
    </View>
  );
});

Input.displayName = 'Input'; 