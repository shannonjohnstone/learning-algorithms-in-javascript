export function collectOddValues(arr) {
  let result = [];

  const [currentInput, ...remainingInputs] = arr
  
  if (arr.length === 0) return result
  if (currentInput % 2 !== 0) result = [...result, currentInput]
  
  return result.concat(collectOddValues(remainingInputs))
}