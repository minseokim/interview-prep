// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

// countX("xxhixx") → 4
// countX("xhixhix") → 3
// countX("hi") → 0

const countX = function(string, index) {
  index = index || 0;
  //base case
  if (index === string.length) {
    return 0;
  }

  //recursive case
  let currentChar = string[index];
  return currentChar === 'x' ? 1 + countX(string, index+1) : countX(string, index+1);
};

console.log(countX("xhixhix"));
console.log(countX("xxhixx"));
console.log(countX("hi"));


