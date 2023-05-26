import { flat } from './flat';

describe('flat', () => {
  it('0 depth', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 0;
    const output = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    expect(flat(arr, n)).toEqual(output);
  });

  it('1 depth', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 1;
    const output = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
    expect(flat(arr, n)).toEqual(output);
  });

  it('2 depth', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ];
    const n = 2;
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(flat(arr, n)).toEqual(output);
  });
});
