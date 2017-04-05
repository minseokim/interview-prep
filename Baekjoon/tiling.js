/*
Find the # of ways to fill up a 2*n rectangle with 1x2, 2x1 tiles.
*/

/*
If D[n] is the # way of ways we can fill  up the tile,

D[n] = D[n-1] + D[n-2]

where D[n-1] is the case where we fill up the tile vertically

D[n-2] is the case where we fill up the tile horizontally

The smallest possible n is 0 or 1?

It's 0.
*/

const tiling = function(n) {
  const memo = {};
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }

  return memo[n];
};

console.log(tiling(9));