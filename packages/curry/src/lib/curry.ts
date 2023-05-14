/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export function curry(fn: Function): Function {
  const len = fn.length;
  const args: any[] = [];
  return function curried(...params: any) {
    args.push(...params);
    return args.length === len ? fn(...args) : curried;
  };
}
