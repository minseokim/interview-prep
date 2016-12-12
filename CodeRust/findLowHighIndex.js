'use strict';

const arr = [1,2,5,5,5,5,5,5,5,5,10,20];
//given sorted array of size millions+ and duplicates, find low and end index of given key

const findLowHighIndex = (array, target) => {
  let low = findLowIndex(array, target);
  let high = findHighIndex(array, target);

  return [low, high];
};

const findLowIndex = (array, target) => {
  let end = array.length-1;
  let start = 0;
  let mid = Math.floor((start+end)/2);

  //Exit condition of while loop is when start is greater than end
  while (start <= end) {
    //recompute mid every iteration
    mid = Math.floor((start+end)/2);

    if (array[mid] >= target) {
      //search left half of array
      end = mid-1;
    } else {
      start = mid+1;
    }
  }

  if (array[start] === target) {
    return start;
  }

  return -1;
};


const findHighIndex = (array, target) => {
  let end = array.length-1;
  let start = 0;
  let mid = Math.floor((start+end)/2);

  //Exit condition of while loop is when start is greater than end
  while (start <= end) {
    //recompute mid every iteration
    mid = Math.floor((start+end)/2);

    if (array[mid] <= target) {
      //search right half of array
      start = mid+1;
    } else {
      //search left half of array
      end = mid-1;
    }
  }

  if (array[end] === target) {
    return end;
  }

  return -1;
};


console.log(findLowHighIndex(arr, 5));