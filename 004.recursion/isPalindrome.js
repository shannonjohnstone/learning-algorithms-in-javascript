export function isPalindrome(str) {
  function reverse(strInput) {
    if (strInput === '') return '';
    return reverse(strInput.substr(1)) + strInput.charAt(0)
  }

  return reverse(str) === str;
}