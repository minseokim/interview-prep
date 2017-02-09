'use strict';

const getNthBit = (num, i) => {
  //shift 1 left by i
  let checkBit = (1 << i);
  //AND num with checkBit, check if it's 0

  return ((num & checkBit) === 0) ? 0 : 1;
};

console.log(getNthBit(5, 1));