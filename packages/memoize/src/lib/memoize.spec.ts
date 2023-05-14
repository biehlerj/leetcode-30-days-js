import { memoize } from './memoize';

describe('test memoize', function () {
  it('memoize sum', function () {
    const sum = (a: number, b: number) => a + b;
    const f = memoize(sum);
    expect(f(2, 2)).toBe(4);
    expect(f(2, 2)).toBe(4);
    expect(f(1, 2)).toBe(3);
  });

  it('memoize factorial', function () {
    const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
    const f = memoize(factorial);
    expect(f(2)).toBe(2);
    expect(f(3)).toBe(6);
    expect(f(2)).toBe(2);
    expect(f(3)).toBe(6);
  });

  it('memoize fib', function () {
    const fib = (n: number): number => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
    const f = memoize(fib);
    expect(f(5)).toBe(8);
  });
});
