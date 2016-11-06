
// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have
// been changed to 'y' chars.

// changeXY("codex") → "codey"
// changeXY("xxhixx") → "yyhiyy"
// changeXY("xhixhix") → "yhiyhiy"

const changeXY = (string, index) => {

  index = index || 0;
  //if index is exhausted return 0
  if (index === string.length) {
    return string.join('');
  }
  //convert string to array the first time
  if (!Array.isArray(string)) {
    string = string.split('');
  }
  //if not, check if current index is x, then change x to Y and check next index
  if (string[index] === 'x') {
    string[index] = 'y';
  }
  return changeXY(string, index+1);
};

console.log(changeXY("code"));