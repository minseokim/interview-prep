'use strict';
const arr = [7,4,32,-15,7,0,1,4,3,3,-2,7];
const arr2 = [10,2,3,4,5];

const swap = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const insertionSort = function(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i; j > 0; j--) {
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