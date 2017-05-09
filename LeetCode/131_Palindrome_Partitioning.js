/*

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = function(string, low, high) {
  while (low < high) {
    if (string[low++] !== string[high--]) return false;
  }
  return true;
}

var partition = function(s) {
  const result = [];

  const recurse = function(startIndex, soFar) {
    if (startIndex === s.length) {
      result.push(soFar.slice());
    }

    for (let i = startIndex; i < s.length; i++) {
      //only push to list if current substring(startIndex ~ i) a palindrome
      if (isPalindrome(s, startIndex, i)) {
        let currentSubstr = s.substring(startIndex, i+1);
        console.log('currentSubstr :', currentSubstr);
        soFar.push(currentSubstr);
        recurse(i+1, soFar);
        soFar.pop();
      }
    }
  };

  recurse(0, []);
  return result;
};

// console.log(partition("aab"));
// console.log(isPalindrome("aab", 0, 1));