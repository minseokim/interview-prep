/*
Find the Nth Fibonacci Number

0, 1, 1, 2, 3, 5, 8,
*/

const fibonacciRecurse = function(n) {

  //D[n] = D[n-1] + D[n-2];
  const memo = {};

  const subroutine = function(n) {
    //base case
    if (n <= 1) return n;

    if (memo[n]) {
      return memo[n];
    }

    memo[n] = subroutine(n-1) + subroutine(n-2);
    return memo[n];
  };

  subroutine(n);

  return memo[n];
};

const fibonacciBottomUp = function(n) {
  const memo = {};
  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }

  return memo[n];
}

console.log(fibonacciRecurse(5));
console.log(fibonacciBottomUp(6));
