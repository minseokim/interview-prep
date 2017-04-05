/*
Fill up a 2 * n rectangle, but this time using
1*2, 2*1, AND 2*2 rectangles.

D[n] now becomes :
D[n] = D[n-1] + 2*(D[n-2])
*/

const tiling = function(n) {
  const memo = {};
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + (2*memo[i-2]);
  }

  return memo[n];
};

console.log(tiling(12));