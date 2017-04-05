/*
You're given N pieces of fishbread.

If the # of profit that you can make on selling i pieces of fishbread is P[i], find the maximum profit you can make from selling N piece of fishbread.

As input, first you're given the number of pieces of fishbread you can sell.

The second input is P[i] from P[1] to P[n].

EX : For 4 pieces of bread,
P[1] = 1
P[2] = 5
P[3] = 6
P[4] = 7

Since for 4 pieces, you can sell 2 pieces twice, 5 * 2 = 10.

If the last 'batch' we sell fishbread to is one person,
D[n] = D[n-1] + P[1]

If it's two people,
D[n] = D[n-2] + P[2]

 ...

D[n] = D[0] + P[n]

Then, we can express D[n] as
D[n] = Max(D[n-i] + P[i]) where i is the # of people we sell fishbread to. 1 <= i <= n.

O(n^2) time complexity since for n different posisbilities, for each case we have to consider all cases where i is from 1 to n. O(n) * n.
*/

const sellFishBread = function(n, profitList) {
  const memo = {};
  memo[0] = 0;
  memo[1] = profitList[0];

  //i goes from 1 to n, denoting the total # of fishbread we sell
  for (let i = 1; i <= n; i++) {
    //j denotes the number of fishbread we sell to the last person
    for (let j = 1; j <= i; j++) {
      if (!memo[i]) {
        memo[i] = memo[i-j] + profitList[j-1];
      }
      memo[i] = Math.max(memo[i], memo[i-j] + profitList[j-1]);
    }
  }

  return memo[n];
};

console.log(sellFishBread(5, [10, 9, 8, 7, 6]));
console.log(sellFishBread(10, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]));
console.log(sellFishBread(10, [5, 10, 11, 12, 13, 30, 35, 40, 45, 47]));

