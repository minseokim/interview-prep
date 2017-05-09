/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(A, B) {
  const result = [];
  //first generate list
  const list = [];
  for (let i = 1; i <= A; i++) {
    list.push(i);
  }

  const recurse = function(index, soFar) {

    if (soFar.length === B) {
      result.push(soFar.slice());
      return;
    }

    if (index === list.length) {
      return;
    }

    let currentElem = list[index];

    soFar.push(currentElem);
    recurse(index+1, soFar);
    soFar.pop();
    recurse(index+1, soFar);
  }

  recurse(0, []);

  return result;
};
