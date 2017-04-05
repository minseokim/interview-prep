const memo = {};

const fibMemo = function(n) {
    if (n <= 1) {
      return n;
    } else {
      if (memo[n]) {
        console.log(n, 'th Fibonacci # found!, value is ', memo[n]);
        return memo[n];
      }
      memo[n] = fibMemo(n-1) + fibMemo(n-2);
      return memo[n];
    }
  };

const fibMemoBottomUp = function(n) {
  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }

  return memo[n];
};

console.log(fibMemoBottomUp(5));