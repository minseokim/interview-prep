// 257 Binary Tree Paths.js

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) {
        return [];
    }

    var pathStor = [];
    var pathTrack = "";

    var depthFirstTraverse = function(root, pathTrack) {
        pathTrack += root.val;

        if (root.left === null & root.right === null) {
            pathStor.push(pathTrack);
        } else {
            if (root.left) {
                depthFirstTraverse(root.left, pathTrack + '->');
            }

            if (root.right) {
                depthFirstTraverse(root.right, pathTrack + '->');
            }
        }
    };

    depthFirstTraverse(root, pathTrack);

    return pathStor;
};