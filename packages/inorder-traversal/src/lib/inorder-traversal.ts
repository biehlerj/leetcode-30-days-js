export type MultidimensionalArray = (MultidimensionalArray | number)[];

export function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield* arr.flat(Infinity) as unknown as Generator<number, void, unknown>;
}
