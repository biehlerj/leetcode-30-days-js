/* eslint-disable @typescript-eslint/no-explicit-any */
export type Callback = (...args: any[]) => any;
export type Subscription = {
  unsubscribe: () => void;
};

export class EventEmitter {
  private events: { [event: string]: Set<Callback> };

  constructor() {
    this.events = {};
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!(eventName in this.events)) this.events[eventName] = new Set();
    this.events[eventName].add(callback);

    return {
      unsubscribe: () => {
        this.events[eventName].delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    if (!(eventName in this.events)) return [];
    const results: any[] = [];
    this.events[eventName].forEach((fn) => results.push(fn(...args)));

    return results;
  }
}
