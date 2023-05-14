/* eslint-disable @typescript-eslint/no-explicit-any */
export type Fn = (...params: any) => any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Cache<T, U> {
  [key: string]: U;
}

export function memoize(fn: Fn): Fn {
  const cache: Cache<any, any> = {};
  return function (...args) {
    if (!(args in cache)) cache[args] = fn(...args);
    return cache[args];
  };
}
