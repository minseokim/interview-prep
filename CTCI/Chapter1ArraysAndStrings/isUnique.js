/*
Implement an algorithm to determine if a string has all unique characters
w/o using an additional data structure
*/

'use strict';

//naive solution : O(n^2) time where for every character,
//we check for duplicates in th entire string

//O(nLogN) solution : Store the characters in array, sort it, iterate it to find duplicates(They must be adjacent to each other)

/*
O(N) solution : Use hash table to store characters, check for duplicates
*/
// const isUnique = function(string) {
//   const chars = new Set();

//   let currentChar;
//   for (let i = 0; i < string.length; i++) {
//     currentChar = string[i];
//     if (!chars.has(currentChar)) {
//       chars.add(currentChar);
//     } else {
//       return false;
//     }
//   }

//   return true;
// };


/*
O(1) time and O(1) space: If character set is ASCII/Unicode, use that information
*/

const isUnique = (string) => {
  //can't make unique string that has length greater than 256 w/ 256 characters
  if (string.length > 256) return false;
  const charSet = new Array(256);
  //fill it with false flags
  charSet.fill(false);

  for (let i = 0; i < string.length; i++) {
    let currentCharCode = string.charCodeAt(i);
    if (charSet[currentCharCode]) {
      return false;
    } else {
      charSet[currentCharCode] = true;
    }
  }
  return true;
};


/*
Optimize it even further : If input is just lowercase a - z, use a bit vector size 8
*/


console.log(isUnique("uniquecharacters"));
console.log(isUnique("abcdefghi"));
console.log(isUnique("dups"));
console.log(isUnique(""));
console.log(isUnique("aa"));
console.log(isUnique("ABADEfa"));
