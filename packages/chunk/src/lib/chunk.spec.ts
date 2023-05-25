import { chunk } from './chunk';

describe('chunk', () => {
  it('array with size of 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 1;
    const output = [[1], [2], [3], [4], [5]];
    expect(chunk(arr, size)).toEqual(output);
  });

  it('uneven arr.length', () => {
    const arr = [1, 9, 6, 3, 2];
    const size = 3;
    const output = [
      [1, 9, 6],
      [3, 2],
    ];
    expect(chunk(arr, size)).toEqual(output);
  });

  it('array size > arr.length', () => {
    const arr = [8, 5, 3, 2, 6];
    const size = 6;
    const output = [[8, 5, 3, 2, 6]];
    expect(chunk(arr, size)).toEqual(output);
  });

  it('empty array', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr: any[] = [];
    const size = 1;
    expect(chunk(arr, size)).toEqual(arr);
  });
});
