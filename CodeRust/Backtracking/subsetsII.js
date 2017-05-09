/*
Given a collection of integers that might contain duplicates, S, return all possible subsets.

 Note:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
The subsets must be sorted lexicographically.
Example :
If S = [1,2,2], the solution is:

[
[],
[1],
[1,2],
[1,2,2],
[2],
[2, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  nums.sort(function(a,b) {
    return a-b;
  });

  const solution = [];

  const generateSubsets = function(startIndex, generated) {
    solution.push(generated.slice());

    for (let i = startIndex; i < nums.length; i++) {

      if (i > startIndex && nums[i] === nums[i-1]) {
        continue;
      }
      generated.push(nums[i]);
      generateSubsets(i+1, generated);
      generated.pop();
    }
  };

  generateSubsets(0, []);
  return solution;
};

console.log(subsetsWithDup([1, 2, 2]));