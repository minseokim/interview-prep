'use strict';
function isBalanced (string) {
  //the last added open bracket has to match the first closing bracket being added
  //use a stack, push open bracket into stack
  //when encounter a closing bracket, pop stack and compare, see if they're matching
    //return false immediately if they dont match
  //in the end, if there are any brackets remaining in the stack, return false
  let stack = [];
  const bracketMatcher = new Map();
  bracketMatcher.set('(', ')');
  bracketMatcher.set('{', '}');
  bracketMatcher.set('[', ']');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {

      let lastAdded = stack.pop(); // '('
      if (bracketMatcher.get(lastAdded) !== string[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("(x + y) - (4)"));//true
console.log(isBalanced("(((10 ) ()) ((?)(:)))"));//true
console.log(isBalanced("(50)("));//false
console.log(isBalanced(""));//true
