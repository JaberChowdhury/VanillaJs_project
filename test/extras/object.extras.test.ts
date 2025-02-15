import { beforeEach, describe, expect, test, vi } from "vitest";

describe("Object extras", () => {
  //    Testing Objects
  const user = {
    name: "John Doe",
    age: 30,
    isAdmin: false,
  };

  test("user object should have correct properties", () => {
    expect(user).toEqual({
      name: "John Doe",
      age: 30,
      isAdmin: false,
    });
  });

  test("user should not be an admin", () => {
    expect(user.isAdmin).toBe(false);
  });
});
describe("Object extras", () => {
  // Testing Asynchronous Code

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("data"), 1000);
    });
  }

  test('fetchData should return "data"', async () => {
    await expect(fetchData()).resolves.toBe("data");
  });
});
describe("Object extras", () => {
  // async / await;

  async function fetchData() {
    return "data";
  }

  test('fetchData should return "data"', async () => {
    const data = await fetchData();
    expect(data).toBe("data");
  });
});
describe("Object extras", () => {
  // Mocking;

  const fetchData = vi.fn(() => Promise.resolve("data"));

  test('fetchData should return "data"', async () => {
    const result = await fetchData();
    expect(result).toBe("data");
    expect(fetchData).toHaveBeenCalled();
  });
});
describe("Object extras", () => {
  // Snapshot Testing

  function generateMarkup() {
    return "<div>Hello, World!</div>";
  }

  test("markup should match snapshot", () => {
    const markup = generateMarkup();
    expect(markup).toMatchSnapshot();
  });
});
describe("Object extras", () => {
  // Testing Edge Cases

  function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }

  test("divide should throw an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero");
  });
});
describe("Object extras", () => {
  let counter = 0;

  beforeEach(() => {
    counter = 0;
  });

  test("increment counter", () => {
    counter++;
    expect(counter).toBe(1);
  });

  test("reset counter", () => {
    expect(counter).toBe(0);
  });
});
