
// Given a non-negative int n, return the count of the occurrences of 7 as a digit,
//so for example 717 yields 2. (no loops).
//Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
//while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// count7(717) → 2
// count7(7) → 1
// count7(123) → 0

const count7 = (num) => {
  if (num < 10) {
    return (num === 7) ? 1 : 0;
  }

  let rightMostDigit = num % 10;
  let nextNumber = Math.floor(num / 10);
  return rightMostDigit === 7 ? 1 + count7(nextNumber) : count7(nextNumber);
};

console.log(count7(717));
// console.log(count7(7));
// console.log(count7(123));