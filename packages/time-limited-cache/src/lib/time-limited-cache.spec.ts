import { TimeLimitedCache } from './time-limited-cache';

describe('timeLimitedCache', () => {
  const timeLimitedCache = new TimeLimitedCache();
  timeLimitedCache.set(1, 42, 1000);

  it('test get', () => {
    expect(timeLimitedCache.get(1)).toEqual(42);
  });

  it('test count', () => {
    expect(timeLimitedCache.count()).toEqual(1);
  });

  it('test get after time', () => {
    const sleep = () => setTimeout(() => timeLimitedCache.get(0), 15000);
    expect(sleep()).resolves.toEqual(-1);
  });
});
