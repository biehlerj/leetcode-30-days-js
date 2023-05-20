/* eslint-disable @typescript-eslint/no-explicit-any */
export type F = (...p: any[]) => any;

export function debounce(fn: F, t: number): F {
  let timeout: NodeJS.Timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
}
