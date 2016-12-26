'use strict';
function fractionConverter (number) {
  let denom = 1;
  let num = number;

  while (num % 1 !== 0) {
    denom *= 10;
    num *= 10;
  }

  let gcd = 1;
  for (let i = num; i > 0; i--) {
    if (num % i === 0 && denom % i === 0) {
      gcd = i;
      break;
    }
  }

  return num/gcd + '/' + denom/gcd;
}


console.log(fractionConverter(0.5));
console.log(fractionConverter(3));
console.log(fractionConverter(2.5));
console.log(fractionConverter(2.75));