import { Fn, reduce } from './reduce';

describe('test reduce', function () {
  it('reduce with sum', function () {
    const nums = [1, 2, 3, 4];
    const sum: Fn = (accum, curr) => accum + curr;
    const init = 0;
    const f = reduce(nums, sum, init);
    expect(f).toStrictEqual(10);
  });

  it('reduce method with multiplication', function () {
    const nums = [1, 2, 3, 4];
    const sum: Fn = (accum, curr) => accum + curr * curr;
    const init = 100;
    const f = reduce(nums, sum, init);
    expect(f).toStrictEqual(130);
  });

  it('reduce with empty nums array', function () {
    const nums: number[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sum: Fn = (accum, curr) => 0;
    const init = 25;
    const f = reduce(nums, sum, init);
    expect(f).toStrictEqual(init);
  });
});
