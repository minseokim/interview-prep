'use strict';
const arr = [0,1,2,3,6,9,13,42,69];

const binarySearch = function(list, target, low, mid, high) {
  low = low || 0;
  high = high || list.length-1;
  mid = Math.floor((low + high) / 2);

  if (low > high) {
    return -1;
  }

  if (list[mid] === target) {
    return mid;
  } else if (list[mid] < target) {
    return binarySearch(list, target, mid+1, mid, high);
  } else {
    return binarySearch(list, target, low, mid, mid-1);
  }
};

const binarySearchIter = function(list, target) {
  let low = 0;
  let high = list.length-1;

  while (low <= high) {
    let mid = Math.floor((low + high)/2);
    if (list[mid] === target) {
      return mid;
    } else if (list[mid] < target) {
      low = mid+1;
    } else {
      high = mid-1;
    }
  }

  return -1;
}
console.log(binarySearch(arr, 55));
console.log(binarySearchIter(arr, 333 ));