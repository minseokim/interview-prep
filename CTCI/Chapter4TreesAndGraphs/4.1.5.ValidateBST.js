/*
Check if a binary tree is a binary search tree
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, lowerBound, upperBound) {
  lowerBound = lowerBound || -Infinity;
  upperBound = upperBound || Infinity;

  //base case
  if (!root) return true;

  if (root.val > upperBound || root.val < lowerBound) return false;

  return (
    isValidBST(root.left, lowerBound, root.val) &&
    isValidBST(root.right, root.val, upperBound)
  );
};
