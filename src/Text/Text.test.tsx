import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "./Text";

describe("Text", () => {
  it("renders with body variant", () => {
    const { getByText } = render(<Text>Body Text</Text>);
    expect(getByText("Body Text")).toBeTruthy();
  });

  it("renders with title variant", () => {
    const { getByText } = render(<Text variant="title">Title Text</Text>);
    expect(getByText("Title Text")).toBeTruthy();
  });
});
