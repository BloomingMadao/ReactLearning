import { sum } from './index';

test('Ma fonction sum', () => {
  const result = sum(3, 8);
  expect(result).toBe(11);
});