
// We'll say that a "pair" in a string is two instances of a char separated by a char.
// So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A
//and 1 for x. Recursively compute the number of pairs in the given string.

// countPairs("axa") → 1
// countPairs("axax") → 2
// countPairs("axbx") → 1

//check current index and index+2 and if they're equal, we have a pair
//we'll just move index by 1 at each recursive call
//base case is when index is greater than last index -2
const countPairs = (string, index) => {
  index = index || 0;

  if (index > string.length-3) {
    return 0;
  }

  if (string[index] === string[index+2]) {
    return 1 + countPairs(string, ++index);
  } else {
    return countPairs(string, ++index);
  }
};

console.log(countPairs("axbx"));