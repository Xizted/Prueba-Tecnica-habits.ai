import Operators from '../src/helper/operators';

describe('Realiza las operaciones básica y con potencias según el signo', () => {
  test('Suma', () => {
    const result = Operators['+'](10, 10);
    expect(result).toBe(20);
  });

  test('Resta', () => {
    const result = Operators['-'](10, 10);
    expect(result).toBe(0);
  });

  test('Multiplicación', () => {
    const result = Operators['*'](10, 10);
    expect(result).toBe(100);
  });

  test('División', () => {
    const result = Operators['/'](10, 10);
    expect(result).toBe(1);
  });

  test('Potencia', () => {
    const result = Operators['^'](10, 10);
    expect(result).toBe(10000000000);
  });
});
