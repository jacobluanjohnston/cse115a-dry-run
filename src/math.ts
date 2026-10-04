export function addNumbers(a: number, b: number): number {
  return a + b;
}

export const isEven = (n: number): boolean => n % 2 === 0;

export const clamp = function (n: number, min: number, max: number): number {
  if (n < min) return min;
  if (n > max) return max;
  return n;
};