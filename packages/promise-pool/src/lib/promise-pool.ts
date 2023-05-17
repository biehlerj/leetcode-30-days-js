/* eslint-disable @typescript-eslint/no-explicit-any */
export type F = () => Promise<any>;

export function promisePool(functions: F[], n: number): Promise<any> {
  const nextFn: F = () => functions[n++]?.().then(nextFn);
  return Promise.all(functions.slice(0, n).map((func) => func().then(nextFn)));
}
