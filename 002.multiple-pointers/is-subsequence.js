/**
 * Write a function called isSubsequence 
 * which takes in two strings 
 * checks whether the characters in the first string form a subsequence of the characters in the second string. 
 * ie the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */
export function isSubsequence(str1, str2) {
  if (!str1) return true;

  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    // if i is equal the last index value of str1 all iterations matched
    // if str2 iterations completes before i matches str1 last index value, matches were incorrect
    const matched = str1[i] === str2[j];
    if ((i === str1.length -1) && matched) return true;
    if (matched) i++;
  }

  return false
}