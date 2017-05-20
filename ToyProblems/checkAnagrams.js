/*
Check if two words are anagrams with each other.
*/

const checkAnagrams = function(word1, word2) {

  if (word1.length !== word2.length) return false;

  const charSet = new Array(256);
  charSet.fill(0);

  for (let i = 0; i < word1.length; i++) {
    let currentCharCode = word1.charCodeAt(i) - 97;
    charSet[currentCharCode] += 1;
  }

  for (let j = 0; j < word2.length; j++) {
    let currentCharCode = word2.charCodeAt(j) - 97;
    charSet[currentCharCode] -= 1;
  }

  for (let count in charSet) {
    if (charSet[count] !== 0) {
      return false;
    }
  }

  return true;
};

// console.log(checkAnagrams("train", "aintr"));