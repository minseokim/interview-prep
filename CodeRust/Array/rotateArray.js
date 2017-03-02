/*
Given an array of integers, rtoate the array by 'N' elements
*/

//Reverse the array,
//reverse 0 ~ n-1
//reverse n ~ length-1

const rotateArray = function(arr, n) {
  let length = arr.length;

  //if n is greater than array size, normalize it
  n = n % length;

  //if n is negative, normalize the rotation
  if (n < 0) n = n + length;

  reverseArray(arr, 0, length-1);
  reverseArray(arr, 0, n-1);
  reverseArray(arr, n, length-1);

  return arr;
};

const reverseArray = function(arr, start, end) {
  while (start < end) {
    //swapping
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const arr = [1,10,20,0,59,86,32,11,9,40];
console.log(rotateArray(arr, -1));    // [10,20,0,59,86,32,11,9,40,1];
