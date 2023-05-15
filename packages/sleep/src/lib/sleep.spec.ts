import { sleep } from './sleep';

describe('sleep', () => {
  test('sleep for 100 millis', async () => {
    expect(sleep(100)).resolves.toHaveBeenCalled();
  });
});
