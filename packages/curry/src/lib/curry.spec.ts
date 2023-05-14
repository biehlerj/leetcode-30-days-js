import { curry } from './curry';

describe('test curry', function () {
  it('curry sum 3 calls', function () {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const f = curry(sum);
    expect(f(1)(2)(3)).toBe(6);
  });

  it('curry sum 2 calls', function () {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const f = curry(sum);
    expect(f(1, 2)(3)).toBe(6);
  });

  it('curry life', function () {
    const life = () => 42;
    const f = curry(life);
    expect(f()).toBe(42);
  });
});
