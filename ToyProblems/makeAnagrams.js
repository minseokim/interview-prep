const makeAnagrams = function(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(anagramDiffChecker(a[i], b[i]));
  }

  return result;
};

const anagramDiffChecker = function(word1, word2) {
  //return -1 if lengths are different.
  if (word1.length !== word2.length) return -1;

  const letterSet = {};

  for (let char in word1) {
    let currentChar = word1[char];
    if (letterSet[currentChar]) {
      letterSet[currentChar] += 1;
    } else {
      letterSet[currentChar] = 1;
    }
  }

  // console.log(letterSet);

  for (let char in word2) {
    let currentChar = word2[char];
    if (letterSet[currentChar] > 0) {
      letterSet[currentChar] -= 1;
    }
  }

  let total = 0;
  for (let char in letterSet) {
    total += letterSet[char];
  }

  return total;
};

// const listOne = ["a", "jk", "abb", "mn", "abc"];
// const listTwo = ["bb", "kj", "bbc", "op", "def"];

// console.log(makeAnagrams(listOne, listTwo)); // [-1,0,1,2,3]
console.log(anagramDiffChecker("xulkowreuowzxgnhmiqekxhz", "istdocbnyozmnqthhpievvlj"));