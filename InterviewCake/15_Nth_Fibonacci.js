'use strict';
//Recursive Solution
function Fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return Fibonacci(n-1) + Fibonacci(n-2);
}


//Iterative solution
function FibIterative(n) {
  let prev = 0;
  let prevPrev = 1;
  let current = 0;
  let count = 0;

  if (n <= 1) {
    return n;
  }

  while (count < n) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
    count++;
  }

  return current;
}

//Memoized Recursion
function fib(n, memo) {

  if (n < 0) {
    throw new Error('cannot have negative indices');
  } else if (n <= 1) {
    return n;
  }

  memo = memo || {};

  if (memo[n]) {
    console.log('grabbing memo[' + n + ']');
    return memo[n];
  }

  console.log('computing fib(' + n + ')');
  let result = fib(n-1, memo) + fib(n-2, memo);

  //memoize
  memo[n] = result;

  return result;
}

function fibIter(n) {

  if (n < 0) {
    throw new Error('cannot have negative indices');
  } else if (n <= 1) {
  return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  //Bottom-up Recursion
  for (let count = 2; count <= n; count++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

// console.log(Fibonacci(4));
// console.log(FibIterative(3));
// console.log(fib(7));