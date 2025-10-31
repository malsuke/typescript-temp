import { sum } from '../src';

describe('index.js', () => {
  it('should be 3 when inputs are 1, 2', () => {
    const actual = sum(1, 2);
    expect(actual).toBe(3);
  });
});
