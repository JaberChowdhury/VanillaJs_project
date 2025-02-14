import { describe, it, expect } from "vitest";
import { toBig, toSmall, min, max } from "../src/arrayUtils";

describe("array utils", () => {
  it("should return maximum value of array", () => {
    expect(max([1, 4, 7, 3])).toBe(7);
  });
});

describe("array utils", () => {
  it("should return minimum value of array", () => {
    expect(min([1, 4, 7, 3])).toBe(1);
  });
});
describe("array utils", () => {
  it("should return array from small to big", () => {
    expect(toBig([1, 4, 7, 3])).toEqual([1, 3, 4, 7]);
  });
});
describe("array utils", () => {
  it("should return array from big to small", () => {
    expect(toSmall([1, 4, 7, 3])).toEqual([7, 4, 3, 1]);
  });
});
