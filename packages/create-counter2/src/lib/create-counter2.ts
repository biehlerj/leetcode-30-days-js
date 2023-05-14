type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter2(init: number): ReturnObj {
  let updated = init;
  const increment = () => {
    updated += 1;
    return updated;
  };
  const decrement = () => {
    updated -= 1;
    return updated;
  };
  const reset = () => {
    updated = init;
    return updated;
  };
  return {
    increment,
    decrement,
    reset
  };
}
