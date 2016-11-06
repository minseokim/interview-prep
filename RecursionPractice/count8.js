// Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8
// as a digit, except that an 8 with another 8 immediately to its left counts double,
// so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// count8(8) → 1
// count8(818) → 2
// count8(8818) → 4

const count8 = (num) => {
  if (num < 1) {
    return 0;
  }

  const lastDigit = num % 10;
  const remaining = Math.floor(num / 10);

  if (lastDigit === 8) {
    if (remaining % 10 === 8) {
      return 2 + count8(remaining);
    } else {
      return 1 + count8(remaining);
    }
  } else {
    return count8(remaining);
  }
};

console.log(count8(888));