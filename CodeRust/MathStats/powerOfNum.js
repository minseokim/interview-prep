/* Given a double 'x' and an integer 'n'. Write a function to calculate 'x' raised to the power 'n'. For example:

power (2, 5) = 32
power (3, 4) = 81
power (1.5, 3) = 3.375
power (2, -2) = 0.25 */


//Improved Solution : Use Divide and Conquer. We divide the exponent by 2 until we reach the base case 1.
// We can express 2 ^ 5 as 2 * 2^(5/2) * 2^(5/2),
//and if the exponent is even, 3^4 = 3^(4/2) * 3^(4/2);
const powerOfNumRecurse = function(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  let temp = powerOfNumRecurse(x, Math.floor(n/2));
  let result;
  //check if n is even or odd
  if (n % 2 === 0) {
    return temp * temp;
  } else if (n % 2 === 1) {
    return x * temp * temp;
  }
};

const powerOfNumMain = function(x, n) {

  let isExpNegative = false;
  let result;

  if (n < 0) {
    isExpNegative = true;
    //turn n into positive
    n *= -1;
  }

  let result = powerOfNumRecurse(x, n);

  if (isExpNegative) {
    return 1/result;
  }

  return result;
};

//Naïve Approach : Multiply 'x' by 'n' times, this is O(n) complexity
const powerOfNum = function(x, n) {

  if (n === 0) {
    return 1;
  }

  if (n > 0) {
    return x * powerOfNum(x, n-1);
  }

  else if (n < 0) {
    return (1/x) * powerOfNum(x, n-1);
  }
};

console.log(powerOfNum(3, 4));