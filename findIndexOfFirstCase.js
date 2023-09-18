/*

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

function strStr(haystack, needle) {
  if (haystack === needle) return 0;

  // return haystack.firstIndexOf(needle) is easiest solution but would not test knowledge

  if (haystack.length < needle.length) return -1;

  let firstIndex = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack[i + needle.length - 1] === needle[needle.length - 1]) {
        if (haystack.substring(i, i + needle.length) === needle) {
          firstIndex = i;
          break;
        }
      }
    }
  }

  return firstIndex;
}
