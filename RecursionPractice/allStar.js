
// Given a string, compute recursively a new string where all the adjacent chars are now
//separated by a "*".

// allStar("hello") → "h*e*l*l*o"
// allStar("abc") → "a*b*c"
// allStar("ab") → "a*b"

const allStar = (string, index, result) => {
  result = result || "";
  index = index || 0;

  if (string.length-1 === index) {
    return result + string[index];
  }

  result += string[index] + "*";
  return allStar(string, index+1, result);
};

console.log(allStar('abc'));