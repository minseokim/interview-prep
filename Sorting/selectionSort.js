'use strict';
const arr = [4,8,32,-15,7,0,1,4,3,3,-2,7];

const swap = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const selectionSort = function(list) {

  for (let i = 0; i < list.length-1; i++) {
    let currentMinIndex = i;
    for (let j = i+1; j < list.length; j++) {
      if (list[j] < list[currentMinIndex]) {
        currentMinIndex = j;
      }
    }
    swap(list, i, currentMinIndex);
  }

  return list;
};

console.log(selectionSort(arr));