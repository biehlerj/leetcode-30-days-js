import { filter } from './filter';

describe('test filter', function () {
  it('filter greater than 10', function () {
    const arr = [0, 10, 20, 30];
    const greaterThan10 = (n: number) => n > 10;
    const f = filter(arr, greaterThan10);
    const expected = [20, 30];
    expect(f).toStrictEqual(expected);
  });

  it('filter first index', function () {
    const arr = [1, 2, 3];
    const firstIndex = (n: number, i: number) => i === 0;
    const f = filter(arr, firstIndex);
    const expected = [1];
    expect(f).toStrictEqual(expected);
  });

  it('filter plus one', function () {
    const arr = [-2, -1, 0, 1, 2];
    const plusOne = (n: number) => n + 1;
    const expected = [-2, 0, 1, 2];
    const f = filter(arr, plusOne);
    expect(f).toStrictEqual(expected);
  });
});
