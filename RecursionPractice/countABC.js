
// Count recursively the total number of "abc" and "aba" substrings that appear in
//the given string.

// countAbc("abc") → 1
// countAbc("abcxxabc") → 2
// countAbc("abaxxaba") → 2
//countAbc("ababcaba") => 3
//countAbc("abababa") => 3

const countAbc = (string, index) => {
  index = index || 0;

  if (index > string.length-3) {
    return 0;
  }

  if (string[index] === "a" && string[index+1] === "b") {
    if (string[index+2] === "c" || string[index+2] === "a") {
      return 1 + countAbc(string, index+2);
    }
  } else {
    return countAbc(string, index+1);
  }
};

console.log(countAbc("abccc"));