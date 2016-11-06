
// Given a non-negative int n, return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

const sumDigits = (num) => {
  //if num is less than 10, just return the number
  //otherwise, compute lastDigit and add this to the recursive call
  //compute recursive call with remaining digits

  if (num < 10) {
    return num;
  }

  const lastDigit = num % 10;
  const remaining = Math.floor(num / 10);

  return lastDigit + sumDigits(remaining);
};

console.log(sumDigits(126));
console.log(sumDigits(49));
console.log(sumDigits(12));