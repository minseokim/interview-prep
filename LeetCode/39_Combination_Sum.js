/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


/*

Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7,
A solution set is:
[
  [7],
  [2, 2, 3]
]

*/

var combinationSum = function(candidates, target) {
  const result = [];

  //recursive routine where each time we choose an element, we subtract it from our target
  //base case is if remaining === 0.
  //iterate through remaining options and choose an element.
  const recurse = function(remaining, soFar, startIndex) {
    if (remaining < 0) {
      return;
    } else if (remaining === 0) {
      result.push(soFar.slice());
    }
    for (let i = startIndex; i < candidates.length; i++) {
      let currentElementToTry = candidates[i];
      soFar.push(currentElementToTry);
      //i, NOT i+1 because we can re-try the same element again and again
      recurse(remaining - currentElementToTry, soFar, i);
      soFar.pop();
    }
  }

  recurse(target, [], 0);

  return result;
};

console.log(combinationSum([2,3,6,7], 7));