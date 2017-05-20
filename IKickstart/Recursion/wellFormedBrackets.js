function generateParentheses(n) {
  wellFormedBrackets(n, n, "");
}

function wellFormedBrackets(remainingLeft, remainingRight, current) {
  if (remainingLeft === 0 && remainingRight === 0) {
    console.log(current);
  }

  if (remainingLeft > 0) {
    wellFormedBrackets(remainingLeft-1, remainingRight, current + "(");
  }

  if (remainingLeft < remainingRight) {
    wellFormedBrackets(remainingLeft, remainingRight - 1, current + ")");
  }
}

generateParentheses(3);