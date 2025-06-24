import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle, AccessibilityProps } from 'react-native';
import { colors, spacing, radius, typography, states, animation } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends AccessibilityProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  theme?: 'light' | 'dark';
}

const getButtonStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
  theme: 'light' | 'dark',
  disabled: boolean
): ViewStyle => {
  const baseStyles: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    borderWidth: variant === 'outline' ? 1 : 0,
    opacity: disabled ? states.disabled.opacity : 1,
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, ViewStyle> = {
    small: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      minHeight: 32,
    },
    medium: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      minHeight: 44,
    },
    large: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      minHeight: 56,
    },
  };

  // Variant styles
  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: {
      backgroundColor: colors[theme].primary,
      borderColor: colors[theme].primary,
    },
    secondary: {
      backgroundColor: colors[theme].secondary,
      borderColor: colors[theme].secondary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: colors[theme].primary,
    },
    ghost: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  };

  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
};

const getTextStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
  theme: 'light' | 'dark',
  disabled: boolean
): TextStyle => {
  const baseTextStyles: TextStyle = {
    fontWeight: '500' as const,
    textAlign: 'center',
  };

  // Size text styles
  const sizeTextStyles: Record<ButtonSize, TextStyle> = {
    small: {
      fontSize: typography.labelMedium.fontSize,
      fontWeight: typography.labelMedium.fontWeight as any,
      lineHeight: typography.labelMedium.lineHeight,
      letterSpacing: typography.labelMedium.letterSpacing,
    },
    medium: {
      fontSize: typography.labelLarge.fontSize,
      fontWeight: typography.labelLarge.fontWeight as any,
      lineHeight: typography.labelLarge.lineHeight,
      letterSpacing: typography.labelLarge.letterSpacing,
    },
    large: {
      fontSize: typography.titleSmall.fontSize,
      fontWeight: typography.titleSmall.fontWeight as any,
      lineHeight: typography.titleSmall.lineHeight,
      letterSpacing: typography.titleSmall.letterSpacing,
    },
  };

  // Variant text styles
  const variantTextStyles: Record<ButtonVariant, TextStyle> = {
    primary: {
      color: colors[theme].onPrimary,
    },
    secondary: {
      color: colors[theme].onSecondary,
    },
    outline: {
      color: colors[theme].primary,
    },
    ghost: {
      color: colors[theme].primary,
    },
  };

  return {
    ...baseTextStyles,
    ...sizeTextStyles[size],
    ...variantTextStyles[variant],
    opacity: disabled ? states.disabled.opacity : 1,
  };
};

export const Button: React.FC<ButtonProps> = React.memo(({
  label,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  theme = 'light',
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  ...rest
}) => {
  const buttonStyles = getButtonStyles(variant, size, theme, disabled);
  const textStyles = getTextStyles(variant, size, theme, disabled);

  const displayLabel = loading ? 'Loading...' : label;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[buttonStyles, style]}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole || 'button'}
      accessibilityState={{ disabled: disabled || loading }}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[textStyles, textStyle]}>
        {displayLabel}
      </Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';
