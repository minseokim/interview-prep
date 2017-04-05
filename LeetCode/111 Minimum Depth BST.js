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
const minDepth = function(root) {
    //base case
    if (!root) return 0;

    //use DFS to find all depths
    const result = [];

    const getDepths = (root, depth) => {
        if (root.left === null && root.right === null) result.push(depth);

        if (root.left) getDepths(root.left, depth+1);

        if (root.right) getDepths(root.right, depth+1);
    };

    getDepths(root, 1);

    //sort result
    result.sort((a,b) => {return a-b;});
    return result[0];
};


const minDepth = function(root) {
    if (!root) return 0;

    if (root.left && root.right) return 1+Math.min(minDepth(root.left), minDepth(root.right));

    else return 1+Math.max(minDepth(root.left), minDepth(root.right));
};

const minDepth = function(root) {
    if (!root) return 0;

    if (root.left && root.right) {
        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    }

    if (root.left === null) {
        return 1 + minDepth(root.right);
    }

    if (root.right === null) {
        return 1 + minDepth(root.left);
    }
};