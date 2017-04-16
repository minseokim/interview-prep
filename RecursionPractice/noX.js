// Given a string, compute recursively a new string
// where all the 'x' chars have been removed.

// noX("xaxb") → "ab"
// noX("abc") → "abc"
// noX("xx") → ""

const noX = (string, index, result) => {
  index = index || 0;
  result = result || '';

  if (index === string.length) {
    return result;
  }

  if (string[index] !== 'x') {
    result += string[index];
  }

  return noX(string, index+1, result);
};

console.log(noX("xaxb"));