import React from "react";
import { render } from "@testing-library/react-native";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders label", () => {
    const { getByText } = render(<Badge label="New" />);
    expect(getByText("New")).toBeTruthy();
  });
});
