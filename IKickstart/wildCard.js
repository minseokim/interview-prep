/*
Input : 10?
Output : 101, 100

? Behaves like a wildcard, and can be replaced with either 0 or 1.

Input : 1?0?
Output : 1000, 1001, 1101, 1100

Write a program that takes given strings as input and produces appropriate output


 */

const wildCard = function(input) {
  let array = input.split('');

  const result = [];

  const subroutine = function(input, index) {
    if (index === array.length) {
      result.push(input.join(''));
      return;
    }

    if (input[index] === '?') {
      input[index] = '0';
      subroutine(input, index+1);

      input[index] = '1';
      subroutine(input, index+1);

      //HAVE to put it back
      input[index] = '?';
    } else {
      subroutine(input, index+1);
    }
  }

  subroutine(array, 0);
  return result;
};

console.log(wildCard('??'));