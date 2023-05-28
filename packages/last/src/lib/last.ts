declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function (): number {
  return this.length ? this.slice(-1)[0] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
