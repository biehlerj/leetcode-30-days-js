export function createHelloWorld() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  return function (...args: any[]): string {
    return 'Hello World';
  };
}
