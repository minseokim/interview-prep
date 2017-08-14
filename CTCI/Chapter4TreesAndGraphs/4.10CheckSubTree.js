/*

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
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
