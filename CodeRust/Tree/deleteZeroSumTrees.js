/*Given root of a binary tree, delete any subtrees whose nodes sum up to zero.*/

const deleteZeroRec = function(root) {
  if (!root) {
    return 0;
  }

  let leftTreeSum = deleteZeroRec(root.left);
  let rightTreeSum = deleteZeroRec(root.right);

  if (leftTreeSum === 0) {
    root.left = null;
  }

  if (rightTreeSum === 0) {
    root.right = null;
  }

  return root.val + leftTreeSum + rightTreeSum;
};

const deleteZeroSumTrees = function(root) {
  if (root) {
    let sum = deleteZeroRec(root);
    if (sum === 0) {
      root = null;
    }
  }
  return root;
}


console.log(root);