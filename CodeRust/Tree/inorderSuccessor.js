/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const findMin = function(root) {
  if (!root) return null;

  while (root.left) {
    root = root.left;
  }

  return root;
};

const inorderSuccessor = function(root, p, successor) {
  if (!root) return null;

  successor = successor || null;

  //going left
  if (root.val > p.val) {
    return inorderSuccessor(root.left, p, root);
  }
  //going right
  else if (root.val < p.val) {
    return inorderSuccessor(root.right, p, successor);
  }
  //we've found our node
  else if (root.val === p.val) {
    //two cases
    if (root.right) {
      return findMin(root.right);
    } else if (root.right === null) {
      //return successor
      return successor;
    }
  }
};