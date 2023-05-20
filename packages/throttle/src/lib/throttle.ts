/* eslint-disable @typescript-eslint/no-explicit-any */
export type F = (...args: any[]) => void;

export function throttle(fn: F, t: number): F {
  let intervalInProgess: any = null;
  let argsToProcess: any[] | null = null;

  const intervalFunction = () => {
    if (argsToProcess === null) {
      clearInterval(intervalInProgess);
      intervalInProgess = null;
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
    }
  };

  return function throttled(...args) {
    if (intervalInProgess) argsToProcess = args;
    else {
      fn(...args);
      intervalInProgess = setInterval(intervalFunction, t);
    }
  };
}
