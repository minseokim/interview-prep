'use strict';
const arr = [4,8,32,-15,7,0,1,4,3,3,-2,7];
const arr2 = [10, 2,3,4,5];

const swap = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const modifiedInsertionSort = function(list, startIndex, increment) {
  for (let i = startIndex; i < list.length-1; i+=increment) {
    for (let j = Math.min(i+increment, list.length-1); j-increment >= 0; j-=increment) {
      if (list[j] < list[j-increment]) {
        swap(list, j, j-increment);
      } else {
        break;
      }
    }
  }
  return list;
};

const shellSort = function(list) {
  let increment = Math.floor(list.length/2);
  while (increment >= 1) {
    console.log('increment : ', increment);
    for (let startIndex = 0; startIndex < increment; startIndex++) {
      modifiedInsertionSort(list, startIndex, increment);
      console.log(list);
    }

    increment = Math.floor(increment / 2);
  }

  return list;
};


const shellSortAlt = function(list) {
  let increment = Math.floor(list.length/2);
  const length = list.length;

  while (increment >=1) {
    for (let i = increment; i < length; i++) {
      for (let j = i; j >= increment; j -= increment) {
        if (list[j] < list[j-increment]) {
          swap(list, j, j-increment);
        }
      }
    }
    increment = Math.floor(increment / 2);
  }

  return list;
};

// console.log(shellSort(arr));

console.log(shellSortAlt(arr));