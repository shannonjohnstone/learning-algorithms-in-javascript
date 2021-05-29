export function sumZeroMultiplePointer(arr) {
  if (!arr) return
  
  const array = arr.sort();
  
  let leftIndex = 0;
  let rightIndex = array.length - 1
  
  while(leftIndex < rightIndex) {
    const leftValue = array[leftIndex]
    const rightValue = array[rightIndex]

    const total = leftValue + rightValue
    
    if (total === 0) {
      return [leftValue, rightValue]
    } else if (total > 0) {
      rightIndex --
    } else {
      leftIndex --
    }
  }
}

export function sumZeroSimple(arr) {
  if(!arr) return

  const array = arr.sort();
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const value1 = array[i]
      const value2 = array[j]
      if(value1 + value2 === 0) return [value1, value2]
    } 
  } 
}