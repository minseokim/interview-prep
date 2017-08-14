/*
  Given a number of N digits, return all the possible binary string for that digits.

  ex) 3 :

  000
  001
  010
  011
  100
  101
  110
  111

  We will use recursion, essentially at every digit we can choose either 0 or 1. So we can spawn off two recursive calls for each one. We reach the base case if the generated string length equals N.
*/

function binaryStrings(N) {
  const result = [];

  function generate(soFar) {
    if (soFar.length === N) {
      result.push(soFar);
      return;
    }

    //make sure to CREATE new strings to be passed into the argument.
    generate(soFar.concat("0"));
    generate(soFar.concat("1"));
  }

  generate("");
  return result;
}

function binaryStringsTwo(string) {
  const result = [];

  function generate(soFar, currentIndex) {
    if (currentIndex === string.length) {
      result.push(soFar.slice());
      return;
    }

    var currentElement = string[currentIndex];

    soFar.push(currentElement);
    generate(soFar, currentIndex + 1);
    soFar.pop();

    generate(soFar, currentIndex + 1);
  }

  generate([], 0);
  return result;
}

console.log(binaryStringsTwo("abc"));
