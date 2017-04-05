/* Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value. */


/* Solution #1  O(n) time and space */
const sumOfTwo = function(arr, targetSum) {
  //as we iterate through array, use hashSet to store elements.
  //During scan, check if targetSum - currentElem exists in hashSet

  //O(n) time and space complexity.
  const elemSet = new Set();

  for (let current in arr) {
    if (elemSet.has(targetSum - arr[current])) {
      return true;
    }

    elemSet.add(arr[current]);
  }

  return false;
};

/* Solution #2 */

const sumOfTwoAlt = function(arr, targetSum) {
  //We sort the array first. Then using two pointers, left and right, we walk them forward/backward.
  //We check the sum of left & right. If it's greater than our targetSum, we move rightValue to the left.
  //If our sum is less than targetSum, we move leftValue to the right.
  //Stop if sum is found, or if left === right.

  let left = 0;
  let right = arr.length-1;

  while (right > left) {
    let sum = arr[left] + arr[right];
    if (sum === targetSum) {
      return true;
    } else if (sum > targetSum) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

const arr = [5, 7, 1, 2, 8, 4, 3];
const targetSum = 10;
const targetSumTwo = 19;

console.log(sumOfTwoAlt(arr, 10)); // true
console.log(sumOfTwoAlt(arr, 19)); // false