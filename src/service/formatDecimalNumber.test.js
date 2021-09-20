import { formatDecimalNumber } from './formatDecimalNumber';

test('When the input value is a real number add ".0000"', () => {
  expect(formatDecimalNumber(1).toString()).toBe('1.0000');
});

test('When the input value has less than 4 digits after decimal point"', () => {
  expect(formatDecimalNumber(1.2).toString()).toBe('1.2000');
  expect(formatDecimalNumber(1.23).toString()).toBe('1.2300');
  expect(formatDecimalNumber(1.234).toString()).toBe('1.2340');
});

test('When the input value has 4 digits after decimal point"', () => {
  expect(formatDecimalNumber(1.2345).toString()).toBe('1.2345');
});

test('When the input value has more than 4 digits after decimal point"', () => {
  expect(formatDecimalNumber(1.2345678).toString()).toBe('1.2346');
});
