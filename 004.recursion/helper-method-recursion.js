export function collectOddValues(arr) {
  let result = [];

  function helper(helperArray) {
    if (helperArray.length === 0) return result
    
    const [currentInput, ...remainingInputs] = helperArray
    if (currentInput % 2 !== 0) result = [...result, currentInput]

    return helper(remainingInputs)
  };

  return helper(arr)
}