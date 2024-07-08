import { describe, test, expect } from "vitest";
import { getBirthday } from "../src/utils/birthdays";

describe("getBirthday function", () => {
  test("returns correct birthday for Jana", () => {
    expect(getBirthday("Jana")).toEqual("17. 3. 1996");
  });

  test("returns incorrect birthday for Petr", () => {
    expect(getBirthday("Petr")).not.toEqual("21. 9. 2002");
  });

  test("returns undefined for unknown name", () => {
    expect(getBirthday("Vendula")).toBeUndefined();
  });
});
