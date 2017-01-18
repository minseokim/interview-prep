'use strict';
const arr = [4,8,32,-15,7,0,1,4,3,3,-2,7];
const arr2 = [10, 2,3,4,5];

const swap = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const insertionSort = function(list) {
  for (let i = 0; i < list.length-1; i++) {
    for (let j = i+1; j > 0; j--) {
      if (list[j] < list[j-1]) {
        swap(list, j, j-1);
      } else {
        break;
      }
    }
  }
  return list;
};

console.log(insertionSort(arr));