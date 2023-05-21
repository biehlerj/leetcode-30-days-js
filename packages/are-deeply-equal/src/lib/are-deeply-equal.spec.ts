import { areDeeplyEqual } from './are-deeply-equal';

describe('areDeeplyEqual', () => {
  it('keys in same order and same values, should return true', () => {
    const o1 = { x: 1, y: 2 };
    const o2 = { x: 1, y: 2 };
    expect(areDeeplyEqual(o1, o2)).toEqual(true);
  });

  it('keys in different order but same values returns true', () => {
    const o1 = { y: 2, x: 1 };
    const o2 = { x: 1, y: 2 };
    expect(areDeeplyEqual(o1, o2)).toEqual(true);
  });

  it("true doesn't equal false", () => {
    const o1 = true;
    const o2 = false;
    expect(areDeeplyEqual(o1, o2)).toEqual(false);
  });
});
