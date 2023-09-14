/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  // Count the occurrences of each character in string 's'
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Validate the occurrences of each character in string 't'
  for (const char of t) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
}
