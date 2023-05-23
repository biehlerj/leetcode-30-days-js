import { jsonToMatrix } from './json-to-matrix';
describe('jsonToMatrix', () => {
  it('2 arrays', () => {
    const arr = [
      { b: 1, a: 2 },
      { b: 3, a: 4 },
    ];
    const output = [
      ['a', 'b'],
      [2, 1],
      [4, 3],
    ];

    expect(jsonToMatrix(arr)).toEqual(output);
  });
  it('2 full objects, one empty object', () => {
    const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];
    const output = [
      ['a', 'b', 'c', 'd'],
      [1, 2, '', ''],
      ['', '', 3, 4],
      ['', '', '', ''],
    ];
    expect(jsonToMatrix(arr)).toEqual(output);
  });
  it('2 nested objects', () => {
    const arr = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];
    const output = [
      ['a.b', 'a.c', 'a.d'],
      [1, 2, ''],
      [3, '', 4],
    ];
    expect(jsonToMatrix(arr)).toEqual(output);
  });
  it('array of array of objects', () => {
    const arr = [[{ a: null }], [{ b: true }], [{ c: 'x' }]];
    const output = [
      ['0.a', '0.b', '0.c'],
      [null, '', ''],
      ['', true, ''],
      ['', '', 'x'],
    ];
    expect(jsonToMatrix(arr)).toEqual(output);
  });
});
