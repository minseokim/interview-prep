/*
Write a method to replace all spaces in a string with '%20'
String has sufficient space at the end to hold additional characters,
and you know the length of the string.
*/
'use strict';

const URLify = (string, length) => {
  //first find # of spaces
  let spaceCount = 0;
  for (let i = 0; i < length; i++) {
    if (string[i] === ' ') spaceCount++;
  }

  // console.log(spaceCount);
  //calculate new length of result
  let newLength = length + (spaceCount * 2);
  const resultString = new Array(newLength);
  // console.log(resultString);

  //iterate backwards
  for (let i = length-1; i >= 0; i--) {
    //Case 1: We've encountered a space
    if (string[i] === ' ') {
      resultString[newLength-1] = '0';
      resultString[newLength-2] = '2';
      resultString[newLength-3] = '%';
      newLength-=3;
    } else {
      resultString[newLength-1] = string[i];
      newLength-=1;
    }
  }
  return resultString.join('');
};

// const URLify = (string, length) => {
//   //one-liner in JavaScript
//   return string.split(" ").join("%20");
// };

console.log(URLify("Mr John Smith", 13));