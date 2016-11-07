
// Given a string, compute recursively a new string where all the lowercase 'x'
// chars have been moved to the end of the string.

// endX("xxre") → "rexx"
// endX("xxhixx") → "hixxxx"
// endX("xhixhix") → "hihixxx"


//build up two separate strings, one for non-x characters and one for x, and
//in the end concatenate them and return
const endX = (string, index, xChar, regularChar) => {
  xChar = xChar || "";
  regularChar = regularChar || "";
  index = index || 0;

  if (string.length === index) {
    return regularChar + xChar;
  }

  //if current character is x, concatenate xChar and call recursively with index+1
  //else current character isn't x, concatenate regularChar and call recursively with index+1
  if (string[index] === "x") {
    xChar += string[index];
  } else {
    regularChar += string[index];
  }

  return endX(string, ++index, xChar, regularChar);
};

console.log(endX("xhixhix"));