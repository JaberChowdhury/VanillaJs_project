export const add = (a: number, b: number) => a + b;
export const substract = (a: number, b: number) => a - b;
export const multiplication = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) =>
  b == 0 ? new Error("A number can not be divided by 0") : a / b;
