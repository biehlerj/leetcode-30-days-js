// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== 'function')
    return false;
  let checkObj = obj;
  if (typeof obj !== 'object') checkObj = Object(obj);
  return checkObj instanceof classFunction;
}
