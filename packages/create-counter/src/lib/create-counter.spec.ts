import { createCounter } from './create-counter';

describe('test createCounter', function () {
  it('createCounter', function () {
    const f = createCounter(10);
    expect(f()).toBe(10);
  });
});
