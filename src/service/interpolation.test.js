import { interpolation } from './interpolation';

test('interpolation', () => {
  expect(interpolation({ x: 1.77, x1: 1.75, y1: 0.2457, x2: 1.8, y2: 0.2345 })).toBe(0.24122);
});
