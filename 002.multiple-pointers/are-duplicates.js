export function areDuplicates(...arr) {
  return new Set(arr).size !== arr.length
}