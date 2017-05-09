/*
Write a function that takes a string as input and returns the string with only the vowels reversed.
Note: The letters "a", "e", "i", "o", and "u" are vowels. The letter "y" is not a vowel.

Example

For s = "hello, world", the output should be
reverseVowelsOfString(s) = "hollo, werld";
For s = "codefights", the output should be
reverseVowelsOfString(s) = "cidefoghts";
For s = "eIaOyU", the output should be
reverseVowelsOfString(s) = "UOaIye".
*/

const isVowel = function(char) {
  console.log('char :', char);
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i'
    || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    return true;
  } else {
    return false;
  }
};

const swap = function(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
};

const reverseVowel = function(string) {
  /*
  Use two pointers, one going from start, one going from end
  if they are both vowels, we will swap them.
  We stop when the pointers meet in the middle.
  */
  const inputArray = string.split('');

  let startIndex = 0;
  let endIndex = string.length-1;

  while (startIndex < endIndex) {

    while (startIndex < endIndex && !isVowel(inputArray[startIndex])) {
      startIndex++;
    }

    while (startIndex < endIndex && !isVowel(inputArray[endIndex])) {
      console.log('endIndex :', endIndex);
      endIndex--;
    }

    swap(inputArray, startIndex, endIndex);
    startIndex++;
    endIndex--;
  }

  return inputArray.join('');
};

console.log(reverseVowel(".,"));