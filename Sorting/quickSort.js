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

  if (low < high) {
    let partitionIndex = partition(list, low, high);
    quickSort(list, low, partitionIndex - 1);
    quickSort(list, partitionIndex+1, high);
  }

  return list;
};

const partition = function(list, low, high) {

  let pivot = list[high];
  //initialize pivotIndex at low
  let pivotIndex = low;

  //loop i from start to high-1(Since high is pivot),
  //and if currentElement is LESS than pivot,
  //swap it with pivotIndex and increment pivotIndex
  //this allows all elements smaller than pivotIndex to go to the left of pivotIndex
  //the idea is we want to push all lesser elements than pivot into the LEFT of pivotIndex
  for (let i = low; i <= high-1; i++) {
    if (list[i] <= pivot) {
      swap(list, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(list, pivotIndex, high);
  console.log('pivotIndex : ', pivotIndex);
  return pivotIndex;
};

console.log(quickSort(arr));