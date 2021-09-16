import { values } from './values';

const INVALID_LAMBDA_VALUE_MESSAGE = 'A Lambda értéke 0,20 és 3 között kell legyen!';
const LAMBDA_MIN_VALUE = 0.2;
const LAMBDA_MAX_VALUE = 3.0;

const hasDataForTheGivenLambda = (lambda: number) =>
  values.find((value: any) => value.lambda === lambda) !== undefined;

export const getValuesForGivenLambda = (lambda: number) => {
  if (lambda < LAMBDA_MIN_VALUE || lambda > LAMBDA_MAX_VALUE) {
    throw new Error(INVALID_LAMBDA_VALUE_MESSAGE);
  }

  if (hasDataForTheGivenLambda(lambda)) {
    return values.find((value: any) => value.lambda === lambda);
  }

  return {
    lambda: 0.23,
    a0: 0.99586,
    a: 0.99334,
    b: 0.98932,
    c: 0.98476,
    d: 0.97666,
  };
};
