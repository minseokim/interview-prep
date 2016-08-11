'use strict';

const findFirstOrLast = function(array, target, searchFirst) {
  let start = 0;
  let end = array.length-1;
  let mid = start + Math.floor((end-start)/2);
  var result = -1;

  while (start <= end) {
    mid = start + Math.floor((end-start)/2);
    if (array[mid] === target) {
      result = mid;
      //find FirstIndex
      if (searchFirst) {
        end = mid-1;
      } //find LastIndex;
      else {
        start = mid+1;
      }
    } else if (array[mid] > target) {
      end = mid-1;
    } else {
      start = mid+1;
    }
  }

  return result;
}

function findCount(array, target) {

  let first = findFirstOrLast(array, target, true);
  let last = findFirstOrLast(array, target, false);
  return (last-first) + 1;
};

console.log(findCount([1,2,3,3,4,4,5], 4));

