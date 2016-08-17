/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {

    var closestSoFar = Infinity;
    var lastDifference = Infinity;
    var currentDifference;

    if (!root) {
        return null;
    }

    while (root) {
        currentDifference = Math.abs(target - root.val);

        if (currentDifference < lastDifference) {
            closestSoFar = root.val;
            lastDifference = currentDifference;
        }

        if (target > root.val) {
            root = root.right;
        } else {
            root = root.left;
        }
    }

    return closestSoFar;
};