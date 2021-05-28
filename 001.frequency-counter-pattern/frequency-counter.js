// The function should return true if every value in the first array has its corresponding value squared in the second array
// The frequency of the values must be the same
// currently not accommodating for spaces
export function frequencyCounter(createLookUpKey) {
  return (value1, value2) => {
    if (!value1 || !value2) return false
  
    if (value1.length !== value2.length) return false
  
    const lookup = {};

    for (const value of value1) {
      const key = createLookUpKey(value)
      lookup[key] = (lookup[key] || 0) + 1
    }
    
    for (const value of value2) {
      if (!lookup[value]) return false
      lookup[value] -= 1
    }
  
    return true
  }
}

export const sameSquared = frequencyCounter((value) => value * value)
export const isAnagram = frequencyCounter((value) => value)

export function __sameSquared__SLOWER(arr1, arr2) {
  if (!arr1 || !arr2) return false
  if (arr1.length !== arr1.length) return false
  
  for (let i = 0; i < arr1.length; i++) {
    const squaredValue = arr1[i] * arr1[i]

    const matchedIndex = arr2.indexOf(value => value === squaredValue)
    
    if (matchedIndex === -1) {
      return false;
    }
    arr2.splice(matchedIndex, 1)
  }

  return true
}