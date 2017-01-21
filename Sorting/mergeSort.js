'use strict';
const arr = [4,8,32,-15,7,0,1,4,3,3,-2,7];

const merge = function(firstHalf, secondHalf) {

  const auxArr = [];
  let i = 0;
  let j = 0;
  let k = i;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      auxArr[k] = firstHalf[i];
      i++;
      k++;
    } else {
      auxArr[k] = secondHalf[j];
      j++;
      k++;
    }
  }

  while (i < firstHalf.length) {
    auxArr[k] = firstHalf[i];
    i++;
    k++;
  }

  while (j < secondHalf.length) {
    auxArr[k] = secondHalf[j];
    j++;
    k++;
  }

  return auxArr;
};


const mergeSort = function(list) {
  let mid;
  let firstHalf;
  let secondHalf;

  //base case is when list length is 1
  if (list.length <= 1) {
    return list;
  }

  if (list.length > 1) {
    //split the array in half
    mid = Math.floor(list.length/2);
    firstHalf = mergeSort(list.slice(0, mid));
    secondHalf = mergeSort(list.slice(mid));
    return merge(firstHalf, secondHalf);
  }
};


console.log(mergeSort(arr));