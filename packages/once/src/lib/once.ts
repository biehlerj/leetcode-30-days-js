// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}
