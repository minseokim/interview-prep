/*
Implement a fn to check if a BST is balanced
'balanced' = height of two subtrees of any node never differ by more than one
*/

const BSTNode = require("../../DataStructures/BinarySearchTree");

//DFS with recursion
const checkBalanced = function(root) {
  balancedCheckRecurse(root, 0, []);
};

const balancedCheckRecurse = function(root, currentDepth, depths) {
  if (!root) return true;

  //only add depth for leafs
  if (!root.leftChild && !root.rightChild) {
    if (depths.indexOf(currentDepth) === -1) {
      depths.push(currentDepth);
    }

    //Check for balance
    if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
      return false;
    }
  } else {
    return (
      balancedCheckRecurse(root.left, currentDepth + 1, depths) &&
      balancedCheckRecurse(root.right, currentDepth + 1, depths)
    );
  }
};
