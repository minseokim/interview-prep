'use strict';
//Iterative solution
const binarySearch = (array, target) => {
  let end = array.length-1;
  let start = 0;
  let mid = Math.floor((start+end)/2);

  //Exit condition of while loop is when start is greater than end
  while (start <= end) {
    //recompute mid every iteration
    mid = Math.floor((start+end)/2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      //search right half of array
      start = mid+1;
    } else if (array[mid] > target) {
      //search left half of array
      end = mid-1;
    }
  }

  //doesn't exist, return -1
  return -1;
};


//recursive solution
const binarySearchRec = (array, target, start, end) => {

  start = start || 0;
  end = end || array.length-1;
  //base case
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start+end)/2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binarySearchRec(array, target, start, mid-1);
  } else if (array[mid] < target) {
    return binarySearchRec(array, target, mid+1, end);
  }
};


//test Cases
const arr = [1,3,5,7,9,11];
const arr2 = [2,4,6,8,10,12];

console.log(binarySearchRec(arr, 9)); //4
console.log(binarySearchRec(arr, 8)); //-1
console.log(binarySearchRec(arr2, 4)); //1
console.log(binarySearchRec(arr2, 7)); //-1;