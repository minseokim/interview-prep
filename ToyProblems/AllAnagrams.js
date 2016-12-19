'use strict';

function allAnagrams (string) {
  let anagrams = {};

  let generator = (used, remaining) => {

    if (remaining.length === 0 || used.length === string.length) {
      anagrams[used] = true;
    }

    for (let i = 0; i < remaining.length; i++) {
      let newUsed = used + remaining[i];
      let newRemaining = remaining.slice(0, i) + remaining.slice(i+1);
      generator(newUsed, newRemaining);
    }
  };

  generator('', string);

  return Object.keys(anagrams);
}

console.log(allAnagrams('abc'));