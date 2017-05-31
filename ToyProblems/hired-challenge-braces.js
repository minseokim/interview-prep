/*
Given an array of braces containing three types of braces, (), [], {}
Prints 1 if it's correctly matched and 0 if it's falsely matched.
*/

const input = [")(){}", "[]({})", "([])", "{()[]}", "([)]"];
             //  0         1         1       1        0


const validator = function(str) {
  const bracketMap = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
  };

  const stack = [];
  //if it's an opener, push to stack. if it's a closer, pop it and compare. Return false if we're trying to pop from an empty stack.

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    if (currentBracket === '(' || currentBracket === '[' || currentBracket === '{') {
      stack.push(currentBracket);
    } else if (currentBracket === ')' || currentBracket === ']' || currentBracket === '}') {
      let lastPushed = stack[stack.length-1];
      if (stack.length === 0 || currentBracket !== bracketMap[lastPushed]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}


const braces = function(expressions) {
  const result = [];
  return expressions.map(function(elem) {
    return validator(elem);
  });
};

console.log(braces(input));