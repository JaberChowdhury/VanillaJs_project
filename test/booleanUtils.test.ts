import { describe, it, expect } from "vitest";
import { haveNumbers, haveStringss } from "../src/booleanUtils";

describe("booleanUtils", () => {
  it("should show true if there are any number in the text", () => {
    expect(haveNumbers("haha4h")).toBe(true);
  });
  it("should show false if there are any number in the text", () => {
    expect(haveNumbers("hahah")).toBe(false);
  });
});

describe("booleanUtils", () => {
  it("should show true if there are any string", () => {
    expect(haveStringss("7836487683gjhgjhgj")).toBe(true);
  });
  it("should show false if there are any string", () => {
    expect(haveStringss("7836487683")).toBe(false);
  });
});
