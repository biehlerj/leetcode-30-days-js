import { promisePool } from './promise-pool';

describe('promisePool', () => {
  it('should work', () => {
    const functions = [
      () => new Promise((res) => setTimeout(res, 300)),
      () => new Promise((res) => setTimeout(res, 400)),
      () => new Promise((res) => setTimeout(res, 200)),
    ];
    const n = 2;
    expect(promisePool(functions, n)).resolves.toHaveBeenCalled();
  });
});
