import { describe, expect, test } from "vitest";

describe("Boolean extras", () => {
  //  Truthy and Falsy Values
  test("value is truthy", () => {
    const truthyValue = "hello";
    expect(truthyValue).toBeTruthy();
  });

  test("value is falsy", () => {
    const falsyValue = "";
    expect(falsyValue).toBeFalsy();
  });
});
describe("Boolean extras", () => {
  // Negating Boolean Checks
  test("value is not true", () => {
    const isFalse = false;
    expect(isFalse).not.toBe(true);
  });

  test("value is not false", () => {
    const isTrue = true;
    expect(isTrue).not.toBe(false);
  });
});
describe("Boolean extras", () => {
  // Boolean Expressions
  test("boolean expression is true", () => {
    const a = 5;
    const b = 10;
    expect(a < b).toBe(true);
  });

  test("logical AND operation", () => {
    const isTrue = true;
    const isAlsoTrue = true;
    expect(isTrue && isAlsoTrue).toBe(true);
  });
});
describe("Boolean extras", () => {
  // Checking for Null or Undefined
  test("value is null", () => {
    const nullValue = null;
    expect(nullValue).toBeNull();
  });

  test("value is undefined", () => {
    const undefinedValue = undefined;
    expect(undefinedValue).toBeUndefined();
  });
});
describe("Boolean extras", () => {
  // Custom Boolean Logic
  test("custom boolean logic", () => {
    const isEven = (num) => num % 2 === 0;
    expect(isEven(4)).toBeTruthy();
    expect(isEven(5)).toBeFalsy();
  });
});
describe("Boolean extras", () => {
  // Boolean Return Values from Functions
  function isPositive(num) {
    return num > 0;
  }

  test("function returns true for positive numbers", () => {
    expect(isPositive(10)).toBe(true);
  });

  test("function returns false for non-positive numbers", () => {
    expect(isPositive(-5)).toBe(false);
  });
});
describe("Boolean extras", () => {
  //  Snapshot Testing for Booleans
  test("boolean snapshot", () => {
    const isTrue = true;
    expect(isTrue).toMatchSnapshot();
  });
});
describe("Boolean extras", () => {
  // Testing a Function That Returns a Boolean
  function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }

  test("isPalindrome returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });

  test("isPalindrome returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("Vitest")).toBe(false);
  });
});
