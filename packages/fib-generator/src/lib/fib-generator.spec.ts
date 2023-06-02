import { fibGenerator } from './fib-generator';

describe('fibGenerator', () => {
  it('should work', () => {
    const gen = fibGenerator();
    expect(gen.next().value).toEqual(0);
    expect(gen.next().value).toEqual(1);
    expect(gen.next().value).toEqual(1);
    expect(gen.next().value).toEqual(2);
    expect(gen.next().value).toEqual(3);
  });
});
