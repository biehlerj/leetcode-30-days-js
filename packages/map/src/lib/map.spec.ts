import { map } from './map';

describe('test map', function () {
  it('plus 1 function', function () {
    const arr = [1, 2, 3];
    const plusOne = (n: number) => n + 1;
    const mappedArr = map(arr, plusOne);
    const expected = [2, 3, 4];
    expect(mappedArr).toStrictEqual(expected);
  });

  it('plus i function', function () {
    const arr = [1, 2, 3];
    const plusI = (n: number, i: number) => n + i;
    const mappedArr = map(arr, plusI);
    const expected = [1, 3, 5];
    expect(mappedArr).toStrictEqual(expected);
  });

  it('constant function', function () {
    const arr = [10, 20, 30];
    const constant = () => 42;
    const mappedArr = map(arr, constant);
    const expected = [42, 42, 42];
    expect(mappedArr).toStrictEqual(expected);
  });
});
