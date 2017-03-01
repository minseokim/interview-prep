// 111. Minimum Depth.js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    var res = [];

    var find = function(root, depth) {
        if (root.left === null && root.right === null) {
            res.push(depth);
        }

        if (root.left) {
            find(root.left, depth+1);
        }
        if (root.right) {
            find(root.right, depth+1);
        }
    };

    if (!root) {
        return 0;
    }

    find(root, 1);

    res.sort(function(a,b) { return a-b; });

    return res[0];
};


const minDepth = function(root) {
    if (!root) return 0;

    if (root.left && root.right) return 1+Math.min(minDepth(root.left), minDepth(root.right));

    else return 1+Math.max(minDepth(root.left), minDepth(root.right));
};