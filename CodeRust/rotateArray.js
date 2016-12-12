'use strict';

const arr = [1,10,20,0,59];
const arr2 = [1,2,3,4];

const reverseInPlace = (array, start, end) => {

  let mid = Math.floor((start+end)/2);
  for (let i = start; i <= mid; i++) {
    let temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    end--;
  }
};

//1. normalize rotations by using modulo operation
//2. change negative num to positive by adding array's length to it(they're equal)
//  Reverse entire list
//  Reverse from 0 to n-1
//  Reverse from n to last index
const rotateArray = (arr, num) => {
  num = num % arr.length;
  if (num < 0) {
    num = num + arr.length;
  }
  // console.log('rotations :', num);
  reverseInPlace(arr, 0, arr.length-1);
  reverseInPlace(arr, 0, num-1);
  reverseInPlace(arr, num, arr.length-1);
};

console.log(rotateArray(arr, -1)); // [10, 20, 0, 59, 1];
console.log(rotateArray(arr2, 2)); // [3,4,1,2];
console.log(arr);
console.log(arr2);