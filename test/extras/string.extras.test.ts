import { describe, test, expect } from "vitest";

describe("string matches using regex", () => {
  //  Regex Matching
  test("string matches regex", () => {
    const email = "user@example.com";
    expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // Basic email regex
  });
  //  String Length
  test("string has correct length", () => {
    const str = "Vitest";
    expect(str).toHaveLength(6);
  });
  //  Custom String Assertions
  test("custom string assertion", () => {
    const str = "Vitest is awesome!";
    expect(str.startsWith("Vitest")).toBeTruthy();
    expect(str.endsWith("awesome!")).toBeTruthy();
  });

  //   Snapshot Testing for Strings
  // If you want to ensure that a string doesn’t change unexpectedly, you can use snapshot testing.
  test("string snapshot", () => {
    const str = "This is a snapshot test and it shouldn't be change";
    expect(str).toMatchSnapshot();
  });
});
