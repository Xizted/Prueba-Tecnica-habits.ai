import Operators from './operators';

const resolve = (a: number, operator: string, b: number = 0): number =>
  Operators[operator](a, b);

export default resolve;
