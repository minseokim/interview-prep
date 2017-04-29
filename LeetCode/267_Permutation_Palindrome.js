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
First verify that the candidates itself is a permutation of palindrome.

If it is, what we can do is generate all different permutations of HALF of the string
What we'll then do is just append the string(Reverse it) to form the full version
*/

var generatePalindromes = function(s) {
  const result = {};

  //check to see this is a permutation of a palindrome first
  const charCount = {};

  let numOfOdds = 0;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (!charCount[currentChar]) {
      charCount[currentChar] = 1;
    } else if (charCount[currentChar]) {
      charCount[currentChar] += 1;
    }
    numOfOdds = ((charCount[currentChar] & 1) === 1) ? numOfOdds+1 : numOfOdds-1;
  }

  let middleChar = "";
  let firstHalf = "";

  //if # of odd characters is greater than 1, return empty array.
  if (numOfOdds > 1) return [];

  //now we need to formulate the 'first half' of the string
  for (let char in charCount) {

    if (charCount[char] & 1 === 1) {
      middleChar += char;
    }

    for (let i = 0; i < Math.floor(charCount[char]/2); i++) {
      firstHalf += char;
    }
  }

  console.log('middleChar :', middleChar);
  console.log('firstHalf :', firstHalf);

  //if input only has one letter, just return itself.
  if (Object.keys(charCount).length === 1) {
      return [s];
  }

  if (numOfOdds <= 1) {
    const generate = function(generated, remaining) {
      if (generated.length === firstHalf.length || remaining.length === 0) {
        let secondHalf = generated.split('').reverse().join('');
        let newString = generated + middleChar + secondHalf;
        result[newString] = true;
        return;
      }

      for (let i = 0; i < remaining.length; i++) {
        let modifiedRemaining = remaining.slice(0, i) + remaining.slice(i+1);
        generate(generated + remaining[i], modifiedRemaining);
      }
    };

    generate("", firstHalf);
  }

  return Object.keys(result);
};


console.log(generatePalindromes("aabbbbccc"));

