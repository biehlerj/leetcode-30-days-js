/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter } from './event-emitter';

describe('eventEmitter', () => {
  it('subscribe only', () => {
    const cb1 = () => 5;
    const cb2 = () => 6;
    const eventEmitter = new EventEmitter();
    expect(eventEmitter.emit('firstEvent')).toEqual([]);
    eventEmitter.subscribe('firstEvent', cb1);
    eventEmitter.subscribe('firstEvent', cb2);
    expect(eventEmitter.emit('firstEvent')).toEqual([5, 6]);
  });

  it('emit with args', () => {
    const cb1 = (...args: any[]) => args.join(',');
    const emitter = new EventEmitter();
    emitter.subscribe('firstEvent', cb1);
    expect(emitter.emit('firstEvent', [1, 2, 3])).toEqual(['1,2,3']);
    expect(emitter.emit('firstEvent', [3, 4, 6])).toEqual(['3,4,6']);
  });

  it('test unsubscribe', () => {
    const cb1 = (...args: any[]) => args.join(',');
    const emmiter = new EventEmitter();
    const sub = emmiter.subscribe('firstEvent', cb1);
    expect(emmiter.emit('firstEvent', [1, 2, 3])).toEqual(['1,2,3']);
    sub.unsubscribe();
    expect(emmiter.emit('firstEvent', [4, 5, 6])).toEqual([]);
  });
});
