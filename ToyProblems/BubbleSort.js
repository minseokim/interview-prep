'use strict';

//Time complexity : O(n^2)

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const bubbleSort = (array) => {
  //iterate through array, if item at current index is larger than next, swap them
  //largest item bubbles to the end
  //repeat this step for all elements

  //optimization :
  //0. if list length is n, we only have to do n-1 passes
  //1. no need to check last item at every iteration(since it will be sorted)
  //2. flag variable to check if there were any swaps in the last pass
    //every pass checks to see if the list is sorted

  let swapped = false;

  //outer loop that iterates through all elements
  for (let i = 0; i < array.length-1; i++) {

    //reset swapped variable to false after very iteration
    swapped = false;
    //inner loop that does the swapping, have to check from beginning
    //don't need to check the last element at every iteration
    for (let j = 0; j < array.length-1-i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
        swapped = true;
      }
    }

    if (!swapped) {
      return array;
    }
  }

  return array;
}


const array = [299, -10, -10, 2, 4, 20];
console.log(bubbleSort(array)); //[-10, -10, 2, 4, 20, 299]