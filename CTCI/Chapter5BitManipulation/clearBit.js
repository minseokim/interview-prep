'use strict';

//Create a number like 11101111 by creating ^(00010000).
//Then we AND it with NUM, since the 0 will clear when performed an AND

const clearBit = (num, i) => {
  let checkBit = 1 << i;
  checkBit = ~(checkBit);

  return checkBit & num;
};

//create checkBit by 1 << i. SUBTRACT 1 from checkBit, this will generate
//a sequence of 0s followed by 1s. Then AND it with num
const clearBitsThroughI = (num, i) => {
  let checkBitMask = (1 << i) - 1;
  return num & checkBitMask;
};

//clear all bits from i through 0.
//MUST use logical shift >>> so that we flip the sign.
//Take sequence of all 1's(-1), shift it over by (31 - i) bits.(Don't know why)
//This gives us a sequence of 1s followed by i 0 bits
const clearBitsIThrough0 = (num, i) => {
  console.log(num.toString(2));
  let mask = ~(-1 >>> (31 - i));
  console.log(mask.toString(2));
  console.log((num & mask).toString());

  return num & mask;
};

console.log(clearBitsIThrough0(36, 3));