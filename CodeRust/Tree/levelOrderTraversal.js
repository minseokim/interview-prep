//102 BST Level Order Traversal.js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderTraversal = function(root) {
    const queue = [];
    const result = [];

    if (!root) return result;

    queue.push([root, 0]);

    let task, node, depth

    while (queue.length) {
      task = queue.shift();
      node = task[0];
      depth = task[1];

      //if current depth doesnt exist, initialize empty array
      if (!result[depth]) {
        result[depth] = [];
      }

      result[depth].push(node.val);

      if (current.left !== null) {
        queue.push([node.left, depth+1]);
      }


      if (current.right !== null) {
        queue.push([node.right, depth+1]);
      }
    }

    return result;
};