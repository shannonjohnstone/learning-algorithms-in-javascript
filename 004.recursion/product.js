export function product([currentInput, ...remainingInputs]) {
  if (currentInput === undefined) return 1;
  return currentInput * product(remainingInputs);
}