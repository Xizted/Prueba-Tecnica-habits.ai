const adition = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;
const pow = (a: number, b: number) => Math.pow(a, b);

interface Operators {
  [key: string]: (a: number, b: number) => number;
}

const Operators: Operators = {
  '+': adition,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '^': pow,
};

export default Operators;
