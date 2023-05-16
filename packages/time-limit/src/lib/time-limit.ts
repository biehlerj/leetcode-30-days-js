// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const abortTimer = new Promise((_, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t);
    });
    return Promise.race([fn(...args), abortTimer]);
  };
}
