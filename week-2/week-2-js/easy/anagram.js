/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var S1 = str1.toUpperCase().split("").sort().join(",");
  var S2 = str2.toUpperCase().split("").sort().join(",");

  if (S1 == S2) return true;
  else return false;
}

module.exports = isAnagram;
