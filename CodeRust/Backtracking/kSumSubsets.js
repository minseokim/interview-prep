/*
Find K-sum subsets
Given an array of N positive integers, find all the subsets of the given array that sum up to the number K

input : [1, 3, 5, 21, 19, 7, 2, 5]
output :{3,7} {5,5} {3,5,2} {1,7,2} {3,2,5}
*/


const kSumSubsets = function(input, target) {
  //we have to try out every single combination but we know that we can re-use the same logic for generating all subsets, and just check if it sums to target.
  const result = [];

  //iterate over all options, choose an element or not choose it.
  //check remaining and if it's 0, push to result.
  const recurse = function(remaining, soFar, startIndex) {
    if (remaining === 0) {
      result.push(soFar.slice());
    }

    for (let i = startIndex; i < input.length; i++) {
      let currentElem = input[i];
      let newRemaining = remaining - currentElem;
      if (newRemaining < 0) continue;
      soFar.push(currentElem);
      recurse(newRemaining, soFar, i+1);
      soFar.pop();
    }
  };

  recurse(target, [], 0);

  return result;
};

console.log(kSumSubsets([1, 3, 5, 21, 19, 7, 2, 5], 10));