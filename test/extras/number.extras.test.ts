import { describe, expect, test } from "vitest";

describe("number extras", () => {
  // Floating-Point Number Matching
  test("floating-point number match", () => {
    const num = 0.1 + 0.2; // 0.30000000000000004
    expect(num).toBeCloseTo(0.3, 5); // Second argument is the number of decimal places to check
  });
  //   Checking for NaN
  test("value is NaN", () => {
    const num = NaN;
    expect(num).toBeNaN();
  });
  //   Checking for Infinity
  test("value is Infinity", () => {
    const num = 1 / 0;
    expect(num).toBe(Infinity);
  });

  test("value is -Infinity", () => {
    const num = -1 / 0;
    expect(num).toBe(-Infinity);
  });
  //   Range Checking
  test("number is within range", () => {
    const num = 50;
    expect(num).toBeGreaterThan(0);
  });
  test("number is within range", () => {
    const num = 50;
    expect(num).toBeLessThan(100);
  });
  //   Checking for Integer
  test("number is an integer", () => {
    const num = 42;
    expect(Number.isInteger(num)).toBeTruthy();
  });
  // Snapshot Testing for Numbers
  test("number snapshot", () => {
    const num = 42;
    expect(num).toMatchSnapshot();
  });
});
