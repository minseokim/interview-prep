/*
Given a string, check if a palindromic substring exists by using only two operations : removeHead(), and removeTail().
*/

//For each string, we have to consider two cases : one where we remove head, and the other where we removeTail. And let's say we removed one letter. Then we have to essentially consider both cases for the same one, and so forth. So we're using recursion since the sub-problem uses the same logic over and over again.

//Clarifying questions : Do we consider one letter words and empty strings to be palindromes?

//Part 1. Recursive part
//Part 2. Verify if string is a palindrome
//Part 3. Return the result.

function checkPalindrome(string) {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

function palindromicSubstring(string) {
  const result = [];
  let found = false;
  let stringArray = string.split("");

  function recurse(substring) {
    if (substring.length === 0) {
      if (checkPalindrome(substring)) {
        result.push(substring.slice());
        found = true;
      }
      return;
    }

    let headRemoved = substring.slice(1);
    let tailRemoved = substring.slice(0, substring.length - 1);
    recurse(headRemoved);
    recurse(tailRemoved);
  }

  recurse(stringArray);

  return result;
}

// console.log(checkPalindrome("panap"));
console.log(palindromicSubstring("xyyz"));
