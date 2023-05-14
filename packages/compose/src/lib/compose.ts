export type F = (x: number) => number;

export function compose(functions: F[]): F {
  if (functions.length === 0) return (x) => x;
  return function (x) {
    let res = x;
    for (let i = functions.length - 1; i >= 0; i--) res = functions[i](res);
    return res;
  };
}
