import { getValuesForGivenLambda } from "./service";

test("when the value exists in table - case 1: lambda = 0.2", () => {
    expect(getValuesForGivenLambda(0.2)).toBe({
        lambda: 0.2,
        a0: 1.0,
        a: 1.0,
        b: 1.0,
        c: 1.0,
        d: 1.0,
    });
});

test("when the value exists in table - case 2: lambda = 1.75", () => {
    expect(getValuesForGivenLambda(1.75)).toBe({
        lambda: 1.75,
        a0: 0.1063,
        a: 0.1036,
        b: 0.0994,
        c: 0.0951,
        d: 0.0882,
    });
});

test("when the value exists in table - case 3: lambda = 1", () => {
    expect(getValuesForGivenLambda(1)).toBe({
        lambda: 1,
        a0: 0.7253,
        a: 0.6656,
        b: 0.597,
        c: 0.5388,
        d: 0.4671,
    });
});

test("when the value exists in table - case 4: lambda = 3", () => {
    expect(getValuesForGivenLambda(3)).toBe({
        lambda: 3,
        a0: 0.1063,
        a: 0.1036,
        b: 0.0994,
        c: 0.0951,
        d: 0.0882,
    });
});

test("when the value doesn't exists in table - calculated using interpolation -case 1: lambda = 1.77", () => {
    expect(getValuesForGivenLambda(1.77)).toBe({
        lambda: 1.77,
        a0: 0.29242,
        a: 0.27866,
        b: 0.2596,
        c: 0.24122,
        d: 0.215,
    });
});

test("when the value doesn't exists in table - calculated using interpolation - case 2: lambda = 0.23", () => {
    expect(getValuesForGivenLambda(0.23)).toBe({
        lambda: 0.23,
        a0: 0.99586,
        a: 0.99334,
        b: 0.98932,
        c: 0.98476,
        d: 0.97666,
    });
});

test("when incorrect input, lambda < 0.20, expect error", () => {
    expect(getValuesForGivenLambda(0.1)).toThrowError(
        "A Lambda értéke 0,20 és 3 között kell legyen!"
    );
});

test("when incorrect input, lambda > 3, expect error", () => {
    expect(getValuesForGivenLambda(4)).toThrowError(
        "A Lambda értéke 0,20 és 3 között kell legyen!"
    );
});
