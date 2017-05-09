/*
Find all subsets given a set of integers

ex ) [2,3,4] --> [[], [2], [3], [4], [2,3], [2,4], [3,4], [2,3,4]]

*/

//We will form a subset using the value of i, where i goes from 0 to n^2. COME BACK TO THIS AFTER REVIEWING BIT MANIPULATION

const allSubsetsBitSolution = function(list) {
  //gets number as input, returns the bit at
  const getNthBit = function(number, bit) {
    //left shift 1 by the number of bits
    let temp = (1 << bit);
    //& operation with the number, if it's 1 the bit at that digit is 1. If it's 0 the bit at that digit is 1.
    temp = temp & number;

    if (temp === 0) return 0;

    return 1;
  };


  const result = [];
  let numOfSubsets = Math.pow(2, list.length);

  for (let i = 0; i < numOfSubsets; i++) {
    let newSet = [];
    //iterate from 0 to i, and add elements according to bit at each digit
    for (let j = 0; j < list.length; j++) {
      //j is the 'index' we'll use to push elements
      if (getNthBit(i, j) === 1) {
        newSet.push(list[j]);
      }
    }
    result.push(newSet);
  }

  return result;
};



const allSubsetsAlt = function(list) {
  const solution = [];

  const recurse = function(index, soFar) {
    if (index === list.length) {
      solution.push(soFar.slice());
      return;
    }

    let currentElem = list[index];
    soFar.push(currentElem);
    recurse(index+1, soFar);

    soFar.pop();
    recurse(index+1, soFar);
  }

  recurse(0, []);
  return solution;
};

//Alternative Solution using Recursion
const allSubsets = function(list) {
  const result = [[]];

  const generateSubsets = function(index) {
    if (index === list.length) {
      return;
    }
    let currentElementToUse = list[index];

    let currentLength = result.length;

    for (let i = 0; i < currentLength; i++) {
      let newSubset = result[i].concat(currentElementToUse);
      result.push(newSubset);
    }
    generateSubsets(index+1);
  };

  generateSubsets(0);
  return result;
};

// console.log(allSubsets(["a","b"]));
// console.log(allSubsetsAltTwo([1,2,3]));
console.log(allSubsetsBitSolution([1,2,3]));