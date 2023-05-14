import { once } from './once';

describe('test once', function () {
  it('call once fn with sum func one time', function () {
    const fn = (a: number, b: number, c: number) => a + b + c;
    const expected = 6;
    const f = once(fn);
    expect(f(1, 2, 3)).toStrictEqual(expected);
  });

  it('call once multiple times', function () {
    const fn = (a: number, b: number, c: number) => a * b * c;
    const expected = 140;
    const f = once(fn);
    expect(f(5, 7, 4)).toStrictEqual(expected);
    expect(f(2, 3, 6)).toBeUndefined();
    expect(f(4, 6, 8)).toBeUndefined();
  });
});
