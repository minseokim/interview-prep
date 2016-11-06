
// Given a non-negative int n, return the count of the occurrences of 7 as a digit,
//so for example 717 yields 2. (no loops).
//Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
//while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// count7(717) → 2
// count7(7) → 1
// count7(123) → 0

const count7 = (num) => {
  //take last digit of num and check if it's 7
  //if it's 7, add 1 and repeat the process

  //if num is less than 1, return 0
  if (num < 1) return 0;
  const lastDigit = num % 10;
  const remaining = Math.floor(num / 10);

  if (lastDigit === 7) {
    return 1 + count7(remaining);
  } else {
    return count7(remaining);
  }
};

console.log(count7(717));
// console.log(count7(7));
// console.log(count7(123));