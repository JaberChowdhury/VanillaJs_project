import { describe, expect, test } from "vitest";

describe("Array extras", () => {
  // Array Length
  test("array has correct length", () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);
  });
});

describe("Array extras", () => {
  // Array Contains an Item
  test("array contains an item", () => {
    const arr = ["apple", "banana", "cherry"];
    expect(arr).toContain("banana");
  });
});
describe("Array extras", () => {
  // Array Does Not Contain an Item
  test("array does not contain an item", () => {
    const arr = ["apple", "banana", "cherry"];
    expect(arr).not.toContain("grape");
  });
});

describe("Array extras", () => {
  // Array Contains All Items
  test("array contains all items", () => {
    const arr = [1, 2, 3, 4, 5, 7];
    expect(arr).toEqual(expect.arrayContaining([2, 5]));
  });
});
describe("Array extras", () => {
  // Array Structure Matching
  test("array structure matches", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    expect(users).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });
});
describe("Array extras", () => {
  //  Empty Array
  test("array is empty", () => {
    const arr = [];
    expect(arr).toHaveLength(0);
    expect(arr).toEqual([]);
  });
});
describe("Array extras", () => {
  // Array Sorting
  test("array is sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    const isSorted = arr.every((val, i, arr) => !i || val >= arr[i - 1]);
    expect(isSorted).toBeTruthy();
  });
});
describe("Array extras", () => {
  // Snapshot Testing for Arrays
  test("array snapshot", () => {
    const arr = [1, 2, 3];
    expect(arr).toMatchSnapshot();
  });
});
