
// Given a string, compute recursively a new string where all the adjacent chars are now
//separated by a "*".

// allStar("hello") → "h*e*l*l*o"
// allStar("abc") → "a*b*c"
// allStar("ab") → "a*b"

const allStar = (string, index, result) => {
  index = index || 0;
  result = result || "";

  if (index === string.length) {
    return result.slice(0, result.length-1);
  }

  result += string[index] + '*';
  return allStar(string, index+1, result);
};

console.log(allStar('ab'));