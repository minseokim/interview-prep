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
var levelOrder = function(root) {
    var result = [];
    var queue = [];

    if (!root) {
        return result;
    }

    queue.push([root, 0]);

    var task, node, depth;

    while (queue.length > 0) {
        task = queue.shift();
        node = task[0];
        depth = task[1];

        if (!result[depth]) {
            result[depth] = [];
        }

        result[depth].push(node.val);

        if (node.left) {
            queue.push([node.left, depth+1]);
        }
        if (node.right) {
            queue.push([node.right, depth+1]);
        }
    }

    return result;

};