'use strict';
function binarySearchRecurse(array, target, start, end) {
  start = start || 0;
  end = end || array.length-1;

  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end)/2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return binarySearchRecurse(array, target, mid+1, end);
  } else if (array[mid] > target) {
    return binarySearchRecurse(array, target, start, mid-1);
  }
}


function binarySearchIterative(array, target) {
  var start = 0;
  var end = array.length-1;
  var mid = Math.floor((start + end) / 2);

  while (start <= end) {

    mid = Math.floor((start + end) / 2);

    console.log('start : ', start);
    console.log('end :', end);
    console.log('mid :', mid);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid-1;
    } else {
      start = mid+1;
    }
  }
  return -1;
}

console.log(binarySearchRecurse([1,2,3,4,5], 1));
// console.log(binarySearchIterative([1,2,3,4,5], 2));