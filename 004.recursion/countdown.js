export function countdown (number) {
  // base case is 0 or false
  if(!number || number <= 0) return 0
  return countdown(number - 1)
}