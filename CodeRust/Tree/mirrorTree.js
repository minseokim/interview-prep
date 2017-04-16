/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  //if root is null, return null;
  if (!root) return null;

  //we're doing a post-order traversal of the BST
  //<Left><Right><Root>

  if (root.left) {
    invertTree(root.left);
  }

  if (root.right) {
    invertTree(root.right);
  }

  //make swaps here
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};