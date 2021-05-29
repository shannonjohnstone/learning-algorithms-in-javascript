export function sumRange(number) {
  // base case is 1 or
  if (!number || number <= 0) return 0
  if (number === 1) return 1
  return number + sumRange(number - 1)
}