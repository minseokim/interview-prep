// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort(function(a,b) {
    return a-b;
  });
  //recursive routine where each time we choose an element, we subtract it from our target
  //base case is if remaining === 0.
  //iterate through remaining options and choose an element.
  const recurse = function(remaining, soFar, startIndex) {
    if (remaining === 0) {
      result.push(soFar.slice());
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i-1]) continue;
      let currentElementToTry = candidates[i];

      //don't even enter if it's negative
      if (remaining - currentElementToTry < 0) continue;
      soFar.push(currentElementToTry);
      recurse(remaining - currentElementToTry, soFar, i+1);
      soFar.pop();
    }
  }

  recurse(target, [], 0);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));