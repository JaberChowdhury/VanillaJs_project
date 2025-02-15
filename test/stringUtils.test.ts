import { describe, it, test, expect } from "vitest";
import { makeLowerCase, makeReverse, makeUpperCase } from "../src/stringUtils";

describe("string utils", () => {
  it("should make text uppercase", () => {
    expect(makeUpperCase("Hello")).toBe("HELLO");
  });
});

describe("string utils", () => {
  it("should make text lowercase", () => {
    expect(makeLowerCase("Hello")).toBe("hello");
  });
});

describe("string utils", () => {
  it("should make text reverse", () => {
    expect(makeReverse("Hello")).toBe("olleH");
  });
  it("should make text reverse and uppercase", () => {
    expect(makeUpperCase(makeReverse("Hello"))).toBe("OLLEH");
  });
});