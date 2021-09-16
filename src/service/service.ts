import { values } from './values';
import { interpolation } from './interpolation';

const INVALID_LAMBDA_VALUE_MESSAGE = 'A Lambda értéke 0,20 és 3 között kell legyen!';
const LAMBDA_MIN_VALUE = 0.2;
const LAMBDA_MAX_VALUE = 3.0;

const hasDataForTheGivenLambda = (lambda: number) =>
  values.find((value: any) => value.lambda === lambda) !== undefined;

const lambdaValues = values.map((value) => value.lambda);

const findTheLowerLambdaValue = (currentLambda: number) => {
  let theLowerLambdaValue;

  lambdaValues.forEach((lambdaValue) => {
    if (lambdaValue < currentLambda) {
      theLowerLambdaValue = lambdaValue;
    }
  });

  return theLowerLambdaValue;
};

const findTheGreaterLambdaValue = (currentLambda: number) =>
  lambdaValues.find((lambdaValue: number) => lambdaValue > currentLambda);

const getTheInterpolatedValueForLambda = (lambda: number, searchedValueType: string) => {
  const theLowerLambdaValue = findTheLowerLambdaValue(lambda);
  const theGreaterLambdaValue = findTheGreaterLambdaValue(lambda);

  const valueSetForTheLowerLambda: any = values.find(
    (value) => value.lambda === theLowerLambdaValue
  );
  const valueSetForTheGreaterLambda: any = values.find(
    (value) => value.lambda === theGreaterLambdaValue
  );

  return interpolation({
    x: lambda,
    x1: valueSetForTheLowerLambda?.lambda,
    y1: valueSetForTheLowerLambda[searchedValueType],
    x2: valueSetForTheGreaterLambda?.lambda,
    y2: valueSetForTheGreaterLambda[searchedValueType],
  });
};

export const getValuesForGivenLambda = (lambda: number) => {
  if (lambda < LAMBDA_MIN_VALUE || lambda > LAMBDA_MAX_VALUE) {
    throw new Error(INVALID_LAMBDA_VALUE_MESSAGE);
  }

  if (hasDataForTheGivenLambda(lambda)) {
    return values.find((value: any) => value.lambda === lambda);
  }

  return {
    lambda,
    a0: getTheInterpolatedValueForLambda(lambda, 'a0'),
    a: getTheInterpolatedValueForLambda(lambda, 'a'),
    b: getTheInterpolatedValueForLambda(lambda, 'b'),
    c: getTheInterpolatedValueForLambda(lambda, 'c'),
    d: getTheInterpolatedValueForLambda(lambda, 'd'),
  };
};
