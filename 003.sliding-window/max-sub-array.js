/**
 * Write a function called maxSubarraySum which accepts an array of integers and a consecutive. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

export function maxSubArraySum(arr, consecutiveNumberLength) {
  // edge case: if n is greater than arr length we can't add n amount of values to together
  if (consecutiveNumberLength > arr.length) return null;

  let maxSum = 0
  let tempSum = 0

  // // sum first group of consecutive values
  for (let i = 0; i < consecutiveNumberLength; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;

  // given the first sum is already completed we start the next loop at the next window
  for (let i = consecutiveNumberLength; i < arr.length; i++) {
    // to calculate the next consecutive group of numbers
    // subtract the first number in the current consecutive group
    // and add the next number in the array
    // this means you do not need to add all the numbers again
    // which means only one iteration is required
    const firstValueLastSum = arr[i - consecutiveNumberLength];
    const numberForNextSum = arr[i]
    
    tempSum = (tempSum - firstValueLastSum) + numberForNextSum;
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

export function maxSubArraySumSimple(arr, n) {
  if (n > arr.length) return null;
  let currentMax = -Infinity

  // loop over arr but stopping with enough values to calculate the amount of n
  // if n 2 and arr has 10 values the last iteration should be when i is 8
  // so that there is enough values to calculate
  for (let i = 0; i < arr.length - n + 1; i++) {
    let calculatedValue = 0;

    for (let j = 0; j < n; j++) {
      const firstValue = arr[i];
      const secondValue = arr[j];
      calculatedValue = firstValue + secondValue
    }
    currentMax = Math.max(currentMax, calculatedValue);
  }

  return currentMax;
}