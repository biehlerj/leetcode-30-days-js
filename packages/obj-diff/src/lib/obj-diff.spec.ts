import { objDiff } from './obj-diff';

describe('objDiff', () => {
  it('empty obj vs non-empty obj', () => {
    const obj1 = {};
    const obj2 = {
      a: 1,
      b: 2,
    };
    const output = {};
    expect(objDiff(obj1, obj2)).toEqual(output);
  });

  it('objects with similar keys different values', () => {
    const obj1 = {
      a: 1,
      v: 3,
      x: [],
      z: {
        a: null,
      },
    };
    const obj2 = {
      a: 2,
      v: 4,
      x: [],
      z: {
        a: 2,
      },
    };
    const output = {
      a: [1, 2],
      v: [3, 4],
      z: {
        a: [null, 2],
      },
    };
    expect(objDiff(obj1, obj2)).toEqual(output);
  });

  it('objects with same keys, but one object contains a nested object', () => {
    const obj1 = {
      a: { b: 1 },
    };
    const obj2 = {
      a: [5],
    };
    const output = {
      a: [{ b: 1 }, [5]],
    };
    expect(objDiff(obj1, obj2)).toEqual(output);
  });

  it('objects same order different', () => {
    const obj1 = {
      a: [1, 2, {}],
      b: false,
    };
    const obj2 = {
      b: false,
      a: [1, 2, {}],
    };
    const output = {};
    expect(objDiff(obj1, obj2)).toEqual(output);
  });
});
