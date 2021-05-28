export function sumZeroMultiplePointer(arr) {
  if (!arr) return
  
  const array = arr.sort();
  
  let leftPositionOfArray = 0;
  let rightPositionOfArray = array.length - 1
  
  while(leftPositionOfArray < rightPositionOfArray) {
    const leftValue = array[leftPositionOfArray]
    const rightValue = array[rightPositionOfArray]

    const total = leftValue + rightValue
    
    if (total === 0) {
      return [leftValue, rightValue]
    } else if (total > 0) {
      rightPositionOfArray --
    } else {
      leftPositionOfArray --
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