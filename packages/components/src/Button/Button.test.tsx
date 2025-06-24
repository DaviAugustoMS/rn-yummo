import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Button } from "./Button";

describe("Button", () => {
  const defaultProps = {
    label: "Test Button",
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders with default props", () => {
      const { getByText } = render(<Button {...defaultProps} />);
      expect(getByText("Test Button")).toBeTruthy();
    });

    it("renders with custom label", () => {
      const { getByText } = render(<Button {...defaultProps} label="Custom Label" />);
      expect(getByText("Custom Label")).toBeTruthy();
    });

    it("renders with different variants", () => {
      const { getByText, rerender } = render(<Button {...defaultProps} variant="primary" />);
      expect(getByText("Test Button")).toBeTruthy();

      rerender(<Button {...defaultProps} variant="secondary" />);
      expect(getByText("Test Button")).toBeTruthy();

      rerender(<Button {...defaultProps} variant="outline" />);
      expect(getByText("Test Button")).toBeTruthy();

      rerender(<Button {...defaultProps} variant="ghost" />);
      expect(getByText("Test Button")).toBeTruthy();
    });

    it("renders with different sizes", () => {
      const { getByText, rerender } = render(<Button {...defaultProps} size="small" />);
      expect(getByText("Test Button")).toBeTruthy();

      rerender(<Button {...defaultProps} size="medium" />);
      expect(getByText("Test Button")).toBeTruthy();

      rerender(<Button {...defaultProps} size="large" />);
      expect(getByText("Test Button")).toBeTruthy();
    });

    it("renders with different themes", () => {
      const { getByText, rerender } = render(<Button {...defaultProps} theme="light" />);
      expect(getByText("Test Button")).toBeTruthy();

      rerender(<Button {...defaultProps} theme="dark" />);
      expect(getByText("Test Button")).toBeTruthy();
    });
  });

  describe("Interactions", () => {
    it("calls onPress when pressed", () => {
      const onPressMock = jest.fn();
      const { getByText } = render(<Button {...defaultProps} onPress={onPressMock} />);
      
      fireEvent.press(getByText("Test Button"));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it("does not call onPress when disabled", () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <Button {...defaultProps} onPress={onPressMock} disabled={true} />
      );
      
      fireEvent.press(getByText("Test Button"));
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it("does not call onPress when loading", () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <Button {...defaultProps} onPress={onPressMock} loading={true} />
      );
      
      fireEvent.press(getByText("Loading..."));
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it("shows loading text when loading is true", () => {
      const { getByText } = render(<Button {...defaultProps} loading={true} />);
      expect(getByText("Loading...")).toBeTruthy();
    });
  });

  describe("Accessibility", () => {
    it("has correct accessibility props by default", () => {
      const { getByRole } = render(<Button {...defaultProps} />);
      const button = getByRole("button");
      
      expect(button).toBeTruthy();
      expect(button.props.accessibilityLabel).toBe("Test Button");
      expect(button.props.accessibilityRole).toBe("button");
      expect(button.props.accessibilityState).toEqual({ disabled: false });
    });

    it("has correct accessibility props when disabled", () => {
      const { getByRole } = render(<Button {...defaultProps} disabled={true} />);
      const button = getByRole("button");
      
      expect(button.props.accessibilityState).toEqual({ disabled: true });
    });

    it("has correct accessibility props when loading", () => {
      const { getByRole } = render(<Button {...defaultProps} loading={true} />);
      const button = getByRole("button");
      
      expect(button.props.accessibilityState).toEqual({ disabled: true });
    });

    it("uses custom accessibility label when provided", () => {
      const { getByRole } = render(
        <Button {...defaultProps} accessibilityLabel="Custom accessibility label" />
      );
      const button = getByRole("button");
      
      expect(button.props.accessibilityLabel).toBe("Custom accessibility label");
    });

    it("uses custom accessibility hint when provided", () => {
      const { getByRole } = render(
        <Button {...defaultProps} accessibilityHint="Custom hint" />
      );
      const button = getByRole("button");
      
      expect(button.props.accessibilityHint).toBe("Custom hint");
    });
  });

  describe("Styling", () => {
    it("applies custom style", () => {
      const customStyle = { backgroundColor: "red" };
      const { getByRole } = render(<Button {...defaultProps} style={customStyle} />);
      const button = getByRole("button");
      
      expect(button.props.style).toContainEqual(customStyle);
    });

    it("applies custom text style", () => {
      const customTextStyle = { color: "blue" };
      const { getByText } = render(<Button {...defaultProps} textStyle={customTextStyle} />);
      const text = getByText("Test Button");
      
      expect(text.props.style).toContainEqual(customTextStyle);
    });
  });

  describe("Edge Cases", () => {
    it("handles empty label", () => {
      const { getByRole } = render(<Button {...defaultProps} label="" />);
      const button = getByRole("button");
      expect(button).toBeTruthy();
    });

    it("handles very long label", () => {
      const longLabel = "This is a very long button label that should still render correctly";
      const { getByText } = render(<Button {...defaultProps} label={longLabel} />);
      expect(getByText(longLabel)).toBeTruthy();
    });

    it("handles special characters in label", () => {
      const specialLabel = "Button with émojis 🚀 and symbols @#$%";
      const { getByText } = render(<Button {...defaultProps} label={specialLabel} />);
      expect(getByText(specialLabel)).toBeTruthy();
    });
  });
});
