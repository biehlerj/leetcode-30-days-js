/* eslint-disable @typescript-eslint/no-explicit-any */
export function areDeeplyEqual(o1: any, o2: any): boolean {
  const objs: [any, any][] = [[o1, o2]];

  while (objs.length) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    [o1, o2] = objs.pop()!;
    if (o1 === o2) continue;
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;

    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
      if (!(key in o2)) return false;
      objs.push([o1[key], o2[key]]);
    }
  }

  return true;
}
