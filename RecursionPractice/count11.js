
// Given a string, compute recursively (no loops) the number of "11" substrings
//in the string. The "11" substrings should not overlap.

// count11("11abc11") → 2
// count11("abc11x11x11") → 3
// count11("111") → 1

const count11 = (string, index) => {
  index = index || 0;

  if (index > string.length-2) {
    return 0;
  }

  if (string[index] === "1" && string[index+1] === "1") {
    return 1 + count11(string, index+2);
  } else {
    return count11(string, index+1);
  }
};

console.log(count11("111"));