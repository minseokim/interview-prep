
// Given a string, return recursively a "cleaned" string where adjacent chars that are
//the same have been reduced to a single char. So "yyzzza" yields "yza".

// stringClean("yyzzza") → "yza"
// stringClean("abbbcdd") → "abcd"
// stringClean("Hello") → "Helo"

const stringClean = function(string, lastAdded, index, result) {
  index = index || 0;
  result = result || "";
  lastAdded = lastAdded || '';

  //base case
  if (index === string.length) {
    return result;
  }

  //check if it's a new character thats NOT lastAdded
  if (string[index] !== lastAdded) {
    result += string[index];
    lastAdded = string[index];
  }

  return stringClean(string, lastAdded, index+1, result);
};

console.log(stringClean("yyzzzzza"));