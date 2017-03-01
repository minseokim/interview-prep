/*
Given a sorted(increasing order) array with unique integer elements,
write an algorithm to create a BST with minimal height
*/

'use strict';

const BSTNode = require('../../DataStructures/BinarySearchTree');

/*
createMinimalBST method that takes an array, start, end
base case returns null(if end < start)
it just returns the root of a minimal tree for that array
its left, right are recursive calls
*/

const createMinimalBST = (arr, start, end) => {
  if (end < start) {
    return null;
  }

  //calculate mid
  let mid = Math.floor((start + end)/2);
  //initialize a new Root with middle element
  const root = new BSTNode(arr[mid]);
  root.leftChild = createMinimalBST(arr, start, mid-1);
  root.rightChild = createMinimalBST(arr, mid+1, end);
  return root;
};

const arr = [0,1,3,5,7,9,12];

console.log(createMinimalBST(arr, 0, arr.length-1));
