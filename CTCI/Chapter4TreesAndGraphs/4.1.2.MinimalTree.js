/*
Given a sorted(increasing order) array with unique integer elements,
write an algorithm to create a BST with minimal height
*/
"use strict";

const BSTNode = require("../../DataStructures/BinarySearchTree");

const minimalTree = function(arr) {
  return createMinimalTree(arr, 0, arr.length - 1);
};

const createMinimalTree = function(list, start, end) {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  let root = new BSTNode(mid);

  root.left = createMinimalTree(list, start, mid - 1);
  root.right = createMinimalTree(list, mid + 1, end);
  return root;
};
