import { getValuesForGivenLambda } from './service';

test('when the value exists in table - case 1: lambda = 0.2', () => {
  expect(getValuesForGivenLambda(0.2)).toMatchObject({
    lambda: 0.2,
    a0: 1,
    a: 1,
    b: 1,
    c: 1,
    d: 1,
  });
});

test('when the value exists in table - case 2: lambda = 1.75', () => {
  expect(getValuesForGivenLambda(1.75)).toMatchObject({
    lambda: 1.75,
    a0: 0.2985,
    a: 0.2843,
    b: 0.2646,
    c: 0.2457,
    d: 0.2188,
  });
});

test('when the value exists in table - case 3: lambda = 1', () => {
  expect(getValuesForGivenLambda(1)).toMatchObject({
    lambda: 1,
    a0: 0.7253,
    a: 0.6656,
    b: 0.597,
    c: 0.5399,
    d: 0.4671,
  });
});

test('when the value exists in table - case 4: lambda = 3', () => {
  expect(getValuesForGivenLambda(3)).toMatchObject({
    lambda: 3,
    a0: 0.1063,
    a: 0.1036,
    b: 0.0994,
    c: 0.0951,
    d: 0.0882,
  });
});

test("when the value doesn't exists in table - calculated using interpolation -case 1: lambda = 1.77", () => {
  const expectedResult = {
    lambda: 1.77,
    a0: 0.29242,
    a: 0.27866,
    b: 0.2596,
    c: 0.24122,
    d: 0.215,
  };

  expect(getValuesForGivenLambda(1.77)).toMatchObject(expectedResult);
});

test("when the value doesn't exists in table - calculated using interpolation - case 2: lambda = 0.23", () => {
  const expectedResult = {
    lambda: 0.23,
    a0: 0.99586,
    a: 0.99334,
    b: 0.98932,
    c: 0.98476,
    d: 0.97666,
  };

  expect(getValuesForGivenLambda(0.23)).toMatchObject(expectedResult);
});

describe('when incorrect input, expect error', () => {
  const expectedErrorMessage = 'A Lambda értéke 0,20 és 3 között kell legyen!';

  test('case 1: lambda < 0.20', () => {
    expect(() => getValuesForGivenLambda(0.1)).toThrow(expectedErrorMessage);
  });

  test('case 2: lambda > 3', () => {
    expect(() => getValuesForGivenLambda(4)).toThrow(expectedErrorMessage);
  });
});
