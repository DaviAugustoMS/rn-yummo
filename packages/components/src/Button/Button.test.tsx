import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with label", () => {
    const { getByText } = render(<Button label="Click me" onPress={() => {}} />);
    expect(getByText("Click me")).toBeTruthy();
  });

  it("triggers onPress", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button label="Press" onPress={onPressMock} />);
    fireEvent.press(getByText("Press"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
