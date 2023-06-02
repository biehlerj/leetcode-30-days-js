import { ArrayWrapper } from './array-wrapper';

describe('arrayWrapper', () => {
  it('array wrapper addition', () => {
    const obj1 = new ArrayWrapper([1, 2]);
    const obj2 = new ArrayWrapper([3, 4]);
    const expected = 10;
    expect(obj1.valueOf() + obj2.valueOf()).toEqual(expected);
  });

  it('array wrapper toString', () => {
    const obj = new ArrayWrapper([23, 98, 42, 70]);
    const expected = '[23,98,42,70]';
    expect(obj.toString()).toEqual(expected);
  });

  it('add empty arrays', () => {
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);
    const expected = 0;
    expect(obj1.valueOf() + obj2.valueOf()).toEqual(expected);
  });
});
