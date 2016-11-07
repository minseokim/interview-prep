'use strict';

// We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length.

let A = ["C", "D", "E", "F", "G"];
let B = [3,0,4,1,2];

//sort(A,B) ==> A is now [D, F, G, C, E]

const sort = (a,b) => {
  let temp = new Array(a.length);
  let i = 0;

  while (i < temp.length) {
    let newIndex = b[i];
    temp[newIndex] = a[i];
    i++;
  }

  for (let i = 0; i < temp.length; i++) {
    a[i] = temp[i];
  }

  return a;
};


const sortAlt = (a,b) => {
  //iterate through a, swap both A and B
  for (let i = 0; i < a.length; i++) {
    let properIndex = b[i];
    if (i !== properIndex) {
      swap(a, properIndex, i);
      swap(b, properIndex, i);
    }
  }
  return a;
};


const swap = (arr, a, b) => {
  let temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
};


console.log(sortAlt(A, B));