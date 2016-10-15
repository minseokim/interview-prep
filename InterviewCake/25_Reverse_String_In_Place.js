'use strict';

function reverseString(string) {
  let array = string.split('');
  let halfLength = Math.floor(string.length/2);
  for (let i = 0; i < halfLength; i++) {
    let temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  }
  return array.join('');
}

console.log(reverseString('reverse this mothafucka'));