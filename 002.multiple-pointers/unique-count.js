export function uniqueCount(arr) {
  if (!arr) return;
  const array = arr.sort();

  let i = 0; // set first position

  // j is the second position
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      // if both values are not equal they are considered unique
      // if unique move i to the next and replace that index in the array the unique value
      // this means at the end the index of i + 1 equals the amount of unique values
      i++;
      array[i] = array[j];
    }
  }

  return i + 1;
}

export function uniqueCountNoMutating(arr) {
  if (!arr) return 0;
  
  const array = arr.sort();

  let uniqueCount = 1
  let i = 0; // set first position

  // j is the second position
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      // if both values are not equal they are considered unique
      // if unique increment i and uniqueCount
      i++;

      uniqueCount += 1
    }
  }

  return uniqueCount;
}