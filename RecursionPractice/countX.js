// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

// countX("xxhixx") → 4
// countX("xhixhix") → 3
// countX("hi") → 0

const countX = function(string, index) {
  //if index is exhausted return 0
  //if index isn't exhausted, countX again with index+1
  //otherwise, check if current index is x, and add 1 to recursive call
  index = index || 0;
  if (index === string.length) {
    return 0;
  }

  if (string[index] === 'x') {
    return 1 + countX(string, index+1);
  } else {
    return countX(string, index+1);
  }
};

console.log(countX("xhixhix"));


