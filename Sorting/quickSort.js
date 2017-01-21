'use strict';
const arr = [4,8,32,-15];

const swap = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const quickSort = function(list, low, high) {
  low = low || 0;
  high = high || list.length-1;

  if (low >= high) {
    return list;
  }

  let partitionIndex = partition(list, low, high);
  quickSort(list, low, partitionIndex - 1);
  quickSort(list, partitionIndex, high);

  return list;
};

const partition = function(list, low, high) {

  let pivot = list[low];
  let l = low;
  let h = high;

  while (l < h) {
    while (list[l] <= pivot) {
      l++;
    }

    while (list[h] > pivot) {
      h--;
    }

    if (l < h) {
      swap(list, l, h);
    }
  }
  swap(list, low, h);

  return h;
};

console.log(quickSort(arr));