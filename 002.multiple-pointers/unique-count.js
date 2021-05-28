export function uniqueCount(array) {
  if (!array) return
  
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++
      array[i] = array[j]
    }
  }
  return i + 1
}