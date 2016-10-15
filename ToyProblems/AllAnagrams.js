//Factorial Time Complexity
function allAnagrams (string) {
  var anagrams = [];
  var currentLetter;

  var generator = function(anagram, remaining) {
    //Checks if already exists duplicates in anagrams
    if (remaining.length === 0 && anagrams.indexOf(anagram) === -1) {
      anagrams.push(anagram);
    } else {
      //loop through each letter in remaining, calling the function recursively
      //Concatenate current letter to the anagram being 'built up',
      //Slice out the current letter from remaining letters using slice!
      for (var i = 0; i < remaining.length; i++) {
        generator(anagram + remaining[i],
                    remaining.slice(0, i) + remaining.slice(i+1));
      }
    }
  };

  generator('', string);

  return anagrams;
}

console.log(allAnagrams('abc'));

