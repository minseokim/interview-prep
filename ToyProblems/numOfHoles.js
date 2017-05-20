const holeChecker = function(digit) {

  //if digit is odd, and NOT a 9 it has no holes
  if (digit === 1 || digit === 2 || digit === 3 || digit === 5 || digit === 7) {
    return 0;
  } else if (digit === 8) {
    return 2;
  } else if (digit === 0 || digit === 4 || digit === 6 || digit === 9) {
    return 1;
  }

};

const numOfHoles = function(num) {
  let total = 0;

  //mod num by 10 to get last digit
  while (num > 0) {
    let rightMostDigit = num % 10;
    // console.log(rightMostDigit);
    total += holeChecker(rightMostDigit);
    // console.log('total :', total);
    num = Math.floor(num / 10);
  }

  return total;
};

console.log(numOfHoles(1288)); // 4
console.log(numOfHoles(630)); // 2