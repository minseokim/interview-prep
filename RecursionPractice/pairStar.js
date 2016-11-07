// Given a string, compute recursively a new string where identical chars that are adjacent
//in the original string are separated from each other by a "*".

// pairStar("hello") → "hel*lo"
// pairStar("xxyy") → "x*xy*y"
// pairStar("aaaa") → "a*a*a*a"

const pairStar = (string, index, result) => {
  index = index || 0;
  result = result || "";

  //if index is string's length just return result
  if (string.length === index) {
    return result;
  }

  //check if character at current index is equal to its next
    //if yes, concatenate current character and * and recursively call with next index
    //if no, just recursively call with next index
  if (string[index] === string[index+1]) {
    result += string[index] + "*";
    return pairStar(string, index+1, result);
  } else {
    result += string[index];
    return pairStar(string, index+1, result);
  }
};

console.log(pairStar("aaaa"));