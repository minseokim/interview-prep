// Given a string, compute recursively a new string
// where all the 'x' chars have been removed.

// noX("xaxb") → "ab"
// noX("abc") → "abc"
// noX("xx") → ""

const noX = (string, index, result) => {
  //initialize an empty string, and we'll build it up
  //check string at index and if it isn't x, we concatenate it to result
  //recursively call noX with incremented index
  result = result || "";
  index = index || 0;

  if (index === string.length) {
    return result;
  }

  if (string[index] !== 'x') {
    result += string[index];
  }

  return noX(string, index+1, result);
};

console.log(noX("xx"));