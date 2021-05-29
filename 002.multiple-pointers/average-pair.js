export function averagePair(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let average = (arr[leftIndex] + arr[rightIndex]) / 2;

    if (average === num) return true;
    
    if (average < num) leftIndex ++;
    else rightIndex --;
  }

  return false
};