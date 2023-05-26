export type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export const flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const stack: [MultiDimensionalArray, number][] = arr.map(
    (item) => [item, n] as [MultiDimensionalArray, number]
  );
  const res: MultiDimensionalArray = [];

  while (stack.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [item, depth] = stack.pop()!;
    if (Array.isArray(item) && depth > 0)
      stack.push(
        ...item.map(
          (element) => [element, depth - 1] as [MultiDimensionalArray, number]
        )
      );
    else res.push(item);
  }

  return res.reverse();
};
