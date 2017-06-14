/*
Find the length of the longest substring(contiguous) that has matching opening and closing parentheses. We only need length, not the substring itself. You may assume valid input.

*/

const maxLengthMatchingParens = function(strExpression) {
  const stack = [];
  stack.push(-1);

  let maxLength = 0;

  for (let i = 0; i < strExpression.length; i++) {
    let current = strExpression[i];

    if (current === '(') {
      stack.push(i);
    } else {

      //pop previous opening bracket's index
      stack.pop();

      //check stack's length
      if (stack.length > 0) {
        let top = stack[stack.length-1];
        maxLength = Math.max(maxLength, i - top);
      } else {
        //if stack is empty, push current index
        stack.push(i);
      }
    }
  }

  return maxLength;
};


function maxLenMatchingParen(strParenExpression) {
  let maxStart = 0;
  let maxLength = 0;
  let prevStart = 0;

  const stack = [];

  for (let i = 0; i < strParenExpression.length; i++) {
    let currentChar = strParenExpression[i];

    if (currentChar === '(') {
      stack.push(i);
    } else {
      //Case 1 : We found a closing paren ')' that doesn't have a matching opening parenthesis.
      if (stack.length === 0) {
        prevStart = i + 1;
      } else {
        //matching parenthesis found
        //compute length of matching parenthesis
        //1.If stack is empty, compute length from previous start position ---> full match
        stack.pop();
        let start = stack.length === 0 ? prevStart - 1 : stack[stack.length-1];
        let size = i - start;

        if (size > maxLength) {
          maxStart = start + 1;
          maxLength = size;
        }
      }
    }
  }

  return maxLength;
}

console.log(maxLengthMatchingParens("()()()")); //6
console.log(maxLengthMatchingParens("(((())()")); //6
console.log(maxLengthMatchingParens("((((((")); //0
console.log(maxLengthMatchingParens("(((())((())")); //4
console.log(maxLengthMatchingParens("()"));