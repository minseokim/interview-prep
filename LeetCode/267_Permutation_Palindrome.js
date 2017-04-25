/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 /*
 Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

For example:

Given s = "aabb", return ["abba", "baab"].

Given s = "abc", return [].
*/

/*
First verify that the candidates itself is a palindrome(Since if it isn't, no permutation of it will be a palindrome)

We will have to try out every permutation and verify that it's a palindrome, and if it is, we will simply store it in result.

Algo to check if it's a palindrome :
Simply iterate from beginning -> middle, checking beginning and end.

*/

const palindromeChecker = function(string) {
  if (string.length === "") {
    return true;
  }

  for (let i = 0; i <= Math.floor(string.length/2); i++) {
    if (string[i] !== string[string.length-1-i]) {
      return false;
    }
  }

  return true;
};

var generatePalindromes = function(s) {

  //check if it's a permutation of a palindrome first...


  //subroutine that generates all permutations, and if it is a palindrome, we will store it in target
  /*
  The way we will generate permutations is by taking one letter from the string, and then once we use it, use the next one from the remaining letters.
  */
  const result = {};

  const generate = function(used, remaining) {
    //terminate if we've used up all letters. Don't forget to push palindromes.
    if (remaining.length === 0 && used.length === s.length) {
      if (palindromeChecker(used)) {
        result[used] = true;
      }
      return;
    }


    for (let i = 0; i < remaining.length; i++) {
      //take out a letter from remaining and append to used
      let updatedUsed = used + remaining[i];
      //take out tha tletter from remaining(Generates new string)
      let slicedRemaining = remaining.slice(0, i) + remaining.slice(i+1);
      generate(updatedUsed, slicedRemaining);
    }
  };

  generate("", s);

  return Object.keys(result);
};

console.log(generatePalindromes("racecar"));