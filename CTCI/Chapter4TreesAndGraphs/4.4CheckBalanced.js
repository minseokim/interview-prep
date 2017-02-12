/*
Implement a fn to check if a BST is balanced
'balanced' = height of two subtrees of any node never differ by more than one
*/

const BSTNode = require('../../DataStructures/BinarySearchTree');

//recursive fn to get Height
const getHeight = (root) => {
  //base case
  if (root === null) {
    return 0;
  }

  return Math.max(getHeight(root.leftChild), getHeight(root.rightChild)) + 1;
};

//For each subtree, check if it's balanced
//base case is, if it's NOT balanced, return -1;
  //if it IS balanced, just return its actual height
const checkHeight = (root) => {
  if (root === null) return 0;

  let leftHeight = checkHeight(root.leftChild);
  if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

  let rightHeight = checkHeight(root.leftChild);
  if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

  let heightDiff = leftHeight - rightHeight;

  //Unbalanced
  if (Math.abs(heightDiff) > 1) {
    return Number.MIN_VALUE;
  } else {
    //Balanced, return normal height
    return Math.max(leftHeight, rightHeight) + 1;
  }

};
