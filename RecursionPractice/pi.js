// Given a string, compute recursively (no loops) a new string
// where all appearances of "pi" have been replaced by "3.14".

// changePi("xpix") → "x3.14x"
// changePi("pipi") → "3.143.14"
// changePi("pip") → "3.14p"

const changePi = (string, index) => {
  //if index is exhausted, return string(join it)
  index = index || 0;

  if (index === string.length) {
    return string.join('');
  }
  //convert string to array initially by checking if string is an array
  if (!Array.isArray(string)) {
    string = string.split('');
  }
  //check if current index is p and next is i, if yes, change index to "3." and next to "14"
    //recursively call with index+2
  //if no, recursively call with index+1
  if (string[index] === 'p' && string[index+1] === 'i') {
    string[index] = "3.";
    string[index+1] = "14";
    return changePi(string, index+2);
  } else {
    return changePi(string, index+1);
  }
};

console.log(changePi("pip"));