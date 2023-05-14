// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const filtered: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
