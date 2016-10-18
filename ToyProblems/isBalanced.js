function isBalanced (string) {
  //go through string, use stack.
    //If open parens, push to stack
    //if closed parens, pop & compare with last popped
  if (string.length === 0) {
    return true;
  }

  var bracketHolder = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      bracketHolder.push(string[i]);
    } else if (string[i] === ')') {
      if (bracketHolder.length === 0) {
        return false;
      }
      bracketHolder.pop();
    }
  }

  if (bracketHolder.length) {
    return false;
  }
  return true;
}
