//javaScript native sort() sorts by unicode
//have to apply our own callback that sorts by descending frequency, then ascending character order(have to be done at once)

'use strict';
function characterFrequency (string) {
  const result = [];
  const letters = new Map();

  for (let i = 0; i < string.length; i++) {
    if (letters.has(string[i])) {
      letters.set(string[i], letters.get(string[i])+1);
    } else {
      letters.set(string[i], 1);
    }
  }

  letters.forEach((value, key) => {
    result.push([key, value]);
  });

  //sort by DESCENDING order of frequency
  //if compareFunction(a,b) < 0, a comes before b
  result.sort((a,b) => {
    //returns -1 if frequency of a is LESS than frequency of b
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
  });

  return result;
}

//Alternative Solution : Sort it by character descending order, then use insertion sort(stable) to sort it
//by ascending character

console.log(characterFrequency("ppoopopomm"));
// console.log(characterFrequency('aardvark'));