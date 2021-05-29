export function factorialIterative(number) {
  if (!number || number <= 0) return 0
  // base case is 1 or
  if (number === 1) return number
  return number * factorialIterative(number - 1)
}