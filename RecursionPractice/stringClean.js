
// Given a string, return recursively a "cleaned" string where adjacent chars that are
//the same have been reduced to a single char. So "yyzzza" yields "yza".

// stringClean("yyzzza") → "yza"
// stringClean("abbbcdd") → "abcd"
// stringClean("Hello") → "Helo"

const stringClean = (string, lastAdded, index, result) => {
  //we build up result from empty string, and if it's a character that's not lastAdded, we
  //concatenate it and return it.
  index = index || 0;
  result = result || "";
  lastAdded = lastAdded || "";

  if (string.length === index) {
    return result;
  }

  if (string[index] !== lastAdded) {
    result += string[index];
    lastAdded = string[index];
  }

  return stringClean(string, lastAdded, ++index, result);
};

console.log(stringClean("Hellooooo"));