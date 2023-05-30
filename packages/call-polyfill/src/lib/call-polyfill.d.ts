/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (
  context: Record<any, any>,
  ...args: any[]
): any {
  return this.apply(context, args);
};
