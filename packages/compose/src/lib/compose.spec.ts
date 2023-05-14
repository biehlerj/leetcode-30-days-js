import { F, compose } from './compose';

describe('test compose', function () {
  it('test compose x = 4', function () {
    const functions: F[] = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const f = compose(functions);
    const x = 4;
    const res = 65;
    expect(f(x)).toStrictEqual(res);
  });

  it('test compose x = 1', function () {
    const functions: F[] = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    const f = compose(functions);
    const x = 1;
    const res = 1000;
    expect(f(x)).toStrictEqual(res);
  });

  it('test compose empty functions array', function () {
    const functions: F[] = [];
    const f = compose(functions);
    const x = 42;
    expect(f(x)).toStrictEqual(x);
  });
});
