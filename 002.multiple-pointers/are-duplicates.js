export function areDuplicates(...arr) {
  // use Set to create unique array and compare length
  // if length is not equal there are duplicates
  return new Set(arr).size !== arr.length
}