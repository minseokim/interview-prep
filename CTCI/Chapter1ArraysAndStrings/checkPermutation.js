/*
Given two strings, write a method to decide if one is a permutation of the other
*/


//Q's : Is the string case sensitive?
    //Can we assume input only has alphabets?
    //Can it contain whitespace?

/*
  If size of character set if FINITE(256 Unicode), can do this in
  O(max(string1, string2)) time with O(1) space
*/
'use strict';
const checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const charArray = new Array(256);
  charArray.fill(0);

  let currentCharCode;
  for (let i = 0; i < string1.length; i++) {
    currentCharCode = string1.charCodeAt(i);
    charArray[currentCharCode]++;
  }


  for (let i = 0; i < string2.length; i++) {
    currentCharCode = string2.charCodeAt(i);
    charArray[currentCharCode]--;
    if (charArray[currentCharCode] < 0) return false;
  }

  return true;
};



/*
  O(n) solution with O(n) space : Hash table to store counts of first string
  Iterate through second string, decrement count if same string is found
    return false immediately if new character is found
  In the end, check if all counts are 0
*/

// const checkPermutation = (string1, string2) => {
//   string1 = string1.toLowerCase();
//   string2 = string2.toLowerCase();
//   const charCount = new Map();
//   let currentChar;

//   for (let i = 0; i < string1.length; i++) {
//     currentChar = string1[i];
//     if (charCount.get(currentChar)) {
//       charCount.set(currentChar, charCount.get(currentChar)+1);
//     } else {
//       charCount.set(currentChar, 1);
//     }
//   }


//   for (let i = 0; i < string2.length; i++) {
//     currentChar = string2[i];
//     if (charCount.get(currentChar)) {
//       charCount.set(currentChar, charCount.get(currentChar)-1);
//     } else {
//       return false;
//     }
//   }

//   let count;
//   for (let i = 0; i < charCount.entries(); i++) {
//     count = charCount.entries()[i][1];
//     if (count !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(checkPermutation("racecar", "carrace"));
console.log(checkPermutation("abcdefg", "gfeabcd"));
console.log(checkPermutation("DOGEATDOG", "EATDOGgod"));
console.log(checkPermutation("unique", "nonUnique"));