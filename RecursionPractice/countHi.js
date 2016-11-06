// Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.

// countHi("xxhixx") → 1
// countHi("xhixhix") → 2
// countHi("hi") → 1

const countHi = function(string, index) {
  //if index is exhausted return 0.
  index = index || 0;
  if (index === string.length) {
    return 0;
  }
  //check string at each index, except check its following index as well
  if (string[index] === 'h' && string[index+1] === 'i') {
    return 1 + countHi(string, index+1);
  } else {
    return countHi(string, index+1);
  }
};

console.log(countHi("xxxxih"));