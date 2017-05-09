/**
 * @param {string} s
 * @return {string}
 */
const isVowel = function(char) {

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

const reverseVowels = function(string) {
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