//O(n) time
//how to find common characters in string1 and string2?
//how to preserve order of string1?
//how to remove whitespace, and handle duplicate letters?

'use strict';

const commonCharacters = function(string1, string2){
  let result = '';
  const characters = new Map();

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== " ") {
      characters.set(string1[i], false);
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (characters.get(string2[i]) === false) {
      characters.set(string2[i], true);
    }
  }

  //can iterate over map instead of iterating over string1, since map preserves insertion order
  characters.forEach((val, key) => {
    if (val === true) {
      result += key;
    }
  });

  return result;
};

console.log(commonCharacters('acexivou', 'aegihobu'));
