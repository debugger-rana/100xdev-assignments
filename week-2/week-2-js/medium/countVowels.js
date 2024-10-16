/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  var strArr = str.split("");
  var count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (/[aeiou]/i.test(strArr[i])) count++;   //reguall expression
  }
  return count;
}

module.exports = countVowels;