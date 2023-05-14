import { createHelloWorld } from './create-hello-world';

describe('test createHelloWorld', function () {
  it('createHelloWorld', function () {
    const f = createHelloWorld();
    expect(f()).toBe('Hello World');
  });
});
