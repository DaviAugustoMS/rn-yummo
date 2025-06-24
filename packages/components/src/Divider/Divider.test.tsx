import React from "react";
import { render } from "@testing-library/react-native";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders without crashing", () => {
    const { toJSON } = render(<Divider />);
    expect(toJSON()).toBeTruthy();
  });
});
