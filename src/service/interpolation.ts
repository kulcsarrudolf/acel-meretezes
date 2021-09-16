/**
 * @param x - intependent value
 * (@param x1, @param y1) - values of the function at one point
 * (@param x2, @param y2) - values of the function at another point
 *
 * @returns y - linear interpolation value
 */

export const interpolation = ({ x, x1, y1, x2, y2 }: any) =>
  y1 + (x - x1) * ((y2 - y1) / (x2 - x1));
