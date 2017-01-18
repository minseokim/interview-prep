'use strict';
const arr = [4,8,32,-15,7,0,1,4,3,3,-2,7];
const arr2 = [10, 2,3,4,5];

const swap = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const bubbleSort = function(list) {

  for (let i = 0; i < list.length-1; i++) {
    let swapped = false;
    for (let j = 0; j < list.length-1-i; j++) {

      if (list[j] > list[j+1]) {
        swap(list, j, j+1);
        swapped = true;
      }
    }

    if (!swapped) {
      console.log('breaking out early');
      return list;
    }
  }

  return list;
};

console.log(bubbleSort(arr2));