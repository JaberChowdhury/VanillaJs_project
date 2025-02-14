import { describe, it, test, expect } from "vitest";
import { add, divide, multiplication, substract } from "../src/mathUtils";

describe("Math utils", () => {
  it("Should sum two number", () => {
    expect(add(10, 20)).toBe(30);
    expect(add(20, 20)).toBe(40);
    expect(add(50, 60)).toBe(110);
  });
});
describe("Math utils", () => {
  it("Should substract two number", () => {
    expect(substract(10, 20)).toBe(-10);
    expect(substract(100, 20)).toBe(80);
  });
});
describe("Math utils", () => {
  it("Should perform multiplication between two number", () => {
    expect(multiplication(10, 20)).toBe(200);
  });
});
describe("Math utils", () => {
  it("Should divide two number", () => {
    expect(divide(10, 10)).toBe(1);
    // expect(divide(10, 0)).toThrow("A number can not be divided by 0");
  });
});

describe("Math utils", () => {
  test("Should divide two number from custom numbers", () => {
    let a, b;
    a = 100;
    b = 100;
    const result = divide(a, b);
    expect(result).toBe(1);
  });
});
