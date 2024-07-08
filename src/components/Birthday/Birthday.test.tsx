import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Birthday } from "./Birthday";

describe("Birthday component", () => {
  test("renders name", () => {
    render(<Birthday name="Vendula" />);
    // screen.debug();
    expect(
      screen.getByText("Nevíme, kdy má Vendula narozeniny")
    ).toBeInTheDocument();
  });
});
