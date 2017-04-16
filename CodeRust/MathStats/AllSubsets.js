/*
Find all subsets given a set of integers

ex ) [2,3,4] --> [[], [2], [3], [4], [2,3], [2,4], [3,4], [2,3,4]]

*/

//We will form a subset using the value of i, where i goes from 0 to n^2. COME BACK TO THIS AFTER REVIEWING BIT MANIPULATION

const allSubsetsBitSolution = function(list) {

};

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

console.log(allSubsets(["a","b"]));