export function* fibGenerator(a = 0, b = 1): Generator<number> {
  yield a;
  yield* fibGenerator(b, a + b);
}
