/*
Given an integer n, find the number of ways to express it as sums of 1, 2, or 3

Example : 4

1 + 1 + 1 + 1

1 + 1 + 2

1 + 2 + 1

2 + 1 + 1

2 + 2

1 + 3

3 + 1

There are seven total different ways to express 4 in sums of 1, 2, or 3.

D[n] = D[n-1] + D[n-2] + D[n-3]
*/

const sumOfOneTwoThree = function(n) {
  const memo = {};
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;


  for (let i = 4; i<= n; i++) {
    memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
  }

  return memo[n];
};

console.log(sumOfOneTwoThree(5));