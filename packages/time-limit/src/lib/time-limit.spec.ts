import { timeLimit } from './time-limit';

describe('timeLimit', () => {
  it('time limit exceeded', async () => {
    const fn = async (n: number) => {
      await new Promise<number>((resolve) => {
        setTimeout(resolve, 100);
      });
      return n * n;
    };
    const limited = timeLimit((n) => fn(n), 50);
    expect(limited(5)).resolves.toBe('Time Limit Exceeded');
  });

  it('time limit not exceeded', () => {
    const fn = async (n: number) => {
      await new Promise<number>((resolve) => setTimeout(resolve, 100));
      return n * n;
    };
    const limited = timeLimit((n) => fn(n), 100);
    expect(limited(5)).resolves.toBe(25);
  });

  it('finishes well before time limit', () => {
    const fn = async (a: number, b: number) => {
      await new Promise<number>((resolve) => setTimeout(resolve, 120));
      return a + b;
    };
    const limited = timeLimit((a, b) => fn(a, b), 150);
    expect(limited(5, 10)).resolves.toBe(15);
  });

  it('function throws error', () => {
    const fn = async () => {
      throw 'Error';
    };
    const limited = timeLimit(() => fn(), 1000);
    expect(limited()).rejects.toBe('Error');
  });
});
