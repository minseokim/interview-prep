/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  Given a collection of integers that might contain duplicates, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


var subsetsWithDup = function(nums) {
  const result = [];

  const recurse = function(startIndex, soFar) {
    //add everything
    result.push(soFar.slice());

    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i-1]) {
        continue;
      }
      //include current element
      let currentElementToSelect = nums[i];
      soFar.push(currentElementToSelect);
      recurse(i+1, soFar);
      soFar.pop();
    }
  };

  recurse(0, []);

  return result;
};

console.log(subsetsWithDup([1,1,2]));