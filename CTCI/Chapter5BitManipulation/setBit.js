'use strict';

//Set Nth bit to 1

const setBit = (num, i) => {
  let checkBit = 1 << i;

  //OR it with num
  return num | checkBit;
};

