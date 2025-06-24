import React, { useEffect, useRef } from 'react';
import {
  Modal as RNModal,
  View,
  TouchableOpacity,
  ViewStyle,
  ModalProps as RNModalProps,
  AccessibilityProps,
  Animated,
  Text,
} from 'react-native';
import { colors, spacing, radius, elevation, animation } from '../../theme';

interface ModalProps extends Omit<RNModalProps, 'style'>, AccessibilityProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  closeOnBackdropPress?: boolean;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  backdropStyle?: ViewStyle;
  theme?: 'light' | 'dark';
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  title,
  showCloseButton = true,
  closeOnBackdropPress = true,
  containerStyle,
  contentStyle,
  backdropStyle,
  theme = 'light',
  accessibilityLabel,
  accessibilityHint,
  ...rest
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: animation.duration.standard,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: animation.duration.standard,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: animation.duration.standard,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: animation.duration.standard,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, fadeAnim, scaleAnim]);

  const handleBackdropPress = () => {
    if (closeOnBackdropPress) {
      onClose();
    }
  };

  const defaultContainerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors[theme].overlay,
  };

  const defaultContentStyle: ViewStyle = {
    backgroundColor: colors[theme].background,
    borderRadius: radius.lg,
    padding: spacing.lg,
    margin: spacing.lg,
    maxWidth: '90%',
    maxHeight: '80%',
    ...elevation.level3,
  };

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      accessibilityLabel={accessibilityLabel || 'Modal'}
      accessibilityHint={accessibilityHint}
      {...rest}
    >
      <Animated.View
        style={[
          defaultContainerStyle,
          backdropStyle,
          { opacity: fadeAnim },
        ]}
      >
        <TouchableOpacity
          style={{ flex: 1, width: '100%' }}
          activeOpacity={1}
          onPress={handleBackdropPress}
          accessibilityRole="button"
          accessibilityLabel="Close modal"
          accessibilityHint="Double tap to close modal"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
              style={[
                defaultContentStyle,
                contentStyle,
                {
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              {title && (
                <View style={{ marginBottom: spacing.md }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: colors[theme].text,
                      textAlign: 'center',
                    }}
                  >
                    {title}
                  </Text>
                </View>
              )}

              {showCloseButton && (
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: spacing.sm,
                    right: spacing.sm,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: colors[theme].surfaceVariant,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={onClose}
                  accessibilityRole="button"
                  accessibilityLabel="Close"
                  accessibilityHint="Double tap to close modal"
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: colors[theme].textSecondary,
                      fontWeight: 'bold',
                    }}
                  >
                    ×
                  </Text>
                </TouchableOpacity>
              )}

              <View style={{ flex: 1 }}>{children}</View>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </RNModal>
  );
};

Modal.displayName = 'Modal'; 