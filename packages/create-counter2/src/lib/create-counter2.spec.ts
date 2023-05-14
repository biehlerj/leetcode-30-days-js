import { createCounter2 } from './create-counter2';

describe('test createCounter', function () {
  it('createCounter', function () {
    const f = createCounter2(5);
    expect(f.increment()).toBe(6);
    expect(f.reset()).toBe(5);
    expect(f.decrement()).toBe(4);
  });
});
