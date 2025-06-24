import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("toggles on change", () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(<Switch value={false} onValueChange={onValueChange} />);
    const switchElement = getByRole("switch");
    fireEvent(switchElement, "valueChange", true);
    expect(onValueChange).toHaveBeenCalledWith(true);
  });
});
