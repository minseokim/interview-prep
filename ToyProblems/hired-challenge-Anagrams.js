/*

Given a list of word pair, write a function that determines for each pair if it's an anagram or not.

For each pair of words the function will return 1 if the pair is an anagram, and 0 if it's not.

Input : firstWords, secondWords
*/

const checker = function(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) return 0;

  const charArray = new Array(256);
  charArray.fill(0);

  for (let i = 0; i < firstWord.length; i++) {
    let currentCharCode = firstWord.charCodeAt(i) - 97;
    charArray[currentCharCode] += 1;
  }

  for (let i = 0; i < secondWord.length; i++) {
    let currentCharCode = secondWord.charCodeAt(i) - 97;
    charArray[currentCharCode] -= 1;
  }

  for (let count in charArray) {
    if (charArray[count] !== 0) {
      return 0;
    }
  }
  return 1;
};

const checkAnagrams = function(firstWords, secondWords) {
  const result = [];

  for (let i = 0; i < firstWords.length; i++) {
    result.push(checker(firstWords[i], secondWords[i]));
  }

  return result;
};

console.log(checkAnagrams(["cinema", "host", "aba", "train"], ["iceman", "shot", "bab", "rain"]));