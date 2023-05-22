import { jsonStringify } from './json-stringify';

describe('jsonStringify', () => {
  it('object with numbers types', () => {
    const object = { y: 1, x: 2 };
    const output = `{"y":1,"x":2}`;
    expect(jsonStringify(object)).toEqual(output);
  });

  it('object with all types', () => {
    const object = { a: 'str', b: -12, c: true, d: null };
    const output = `{"a":"str","b":-12,"c":true,"d":null}`;
    expect(jsonStringify(object)).toEqual(output);
  });

  it('object with nested objects', () => {
    const object = { key: { a: 1, b: [{}, null, 'Hello'] } };
    const output = `{"key":{"a":1,"b":[{},null,"Hello"]}}`;
    expect(jsonStringify(object)).toEqual(output);
  });

  it('pass primitive value type', () => {
    const object = true;
    const output = 'true';
    expect(jsonStringify(object)).toEqual(output);
  });
});
