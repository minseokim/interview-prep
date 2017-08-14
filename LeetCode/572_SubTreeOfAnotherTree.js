/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

const isEqual = (treeOne, treeTwo) => {
  if (treeOne === null && treeTwo === null) return true;

  if (treeOne === null || treeTwo === null) return false;

  if (treeOne.val !== treeTwo.val) return false;

  //they both have values.
  return (
    isEqual(treeOne.left, treeTwo.left) && isEqual(treeOne.right, treeTwo.right)
  );
};

var isSubtree = function(s, t) {
  if (s === null) return false;

  if (isEqual(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};
