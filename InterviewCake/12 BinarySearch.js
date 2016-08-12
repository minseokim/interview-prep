"use strict"

function BinarySearch(array, target) {
  let start = array[0];
  let end = array[array.length-1];
  let mid = Math.floor((start + end)/2);

  while (start <= end) {
    mid = Math.floor((start + end)/2);

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      end = mid-1;
    } else {
      start = mid+1;
    }
  }
  return -1;
}

function BinarySearchRecurse(array, target, start, end) {
  start = start || 0;
  end = end || array.length-1;

  // console.log('start :', start, 'end :', end);
  let mid = Math.floor((start + end)/2);

  if (start > end) {
    return -1;
  }

  if (target === array[mid]) {
    return mid;
  }

  else if (target > array[mid]) {
    start = mid+1;
    return BinarySearchRecurse(array, target, start, end);
  } else {
    end = mid-1;
    return BinarySearchRecurse(array, target, start, end);
  }

}

// console.log(BinarySearch([1,2,3,4,5], 5));
console.log(BinarySearchRecurse([1,2,3,4,5], 1));
