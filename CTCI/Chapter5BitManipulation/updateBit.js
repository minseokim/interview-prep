'use strict';

//First clear the bit at position i
//using a mask that looks like 11101111.
//Then shift the intended value left by i bits
//000v0000
//OR these two numbers
const updateBit = (num, i, bitIs1) => {
  let value = bitIs1 ? 1 : 0;
  let mask = ~(1 <<< i);
  return (num & mask) | (value << i);
};