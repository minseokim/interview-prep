'use strict';
/*
Two 32-bit numbers N and M, and two bit positions i and j.
Insert M into N such that M starts at bit j and ends at bit i.
Can assume bits j through i have enough space to fit all of M.
If M = 10011, 5 bits between j and i exist.
Input = N = 100000000000, M = 10011, i = 2, j = 6
Output N = 10001001100
*/

const insert = (num1, num2, i, j) => {

//1's before position j, then 0s 11100000
let left = ~0 << (j+1);

//1's AFTER position i, 000000011
let right = ((1 << i) - 1);

let mask = left | right;

//clear bits j through i then put m in there
let clearedNum1 = num1 & mask;

let shiftedM = m << i;

return clearedNum1 | shiftedM;
};