//1, 1, 2, 3, 5, 8

//Recursive
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n-1) + fibonacci(n-2);
}


function fibIter(n) {
  if (n <=1) {
    return n;
  }

  var prev, current, next = 0,
}
console.log(fibonacci(2));