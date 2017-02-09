'use strict';
/*
Convert double into a binary number. "ERROR" if 32 characters is not enough
*/
const binaryToString = (num) => {
  if (num >= 1 | num <= 0) {
    throw new Error("Number has to be between 0 and 1");
  }

  let resultString = ".";
  let startBinaryNum = .5;

  while (num > 0) {
    if (resultString.length > 32) {
      throw new Error("ERROR");
    }

    if (num >= startBinaryNum) {
      resultString += "1";
      num -= startBinaryNum;
    } else {
      resultString += "0";
    }

    startBinaryNum /= 2;
  }
  return resultString;
};

console.log(binaryToString(0.75));