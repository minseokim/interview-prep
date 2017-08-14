/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = [];
    let addedSoFar = 0;

    const dfs = (root, soFar) => {
        if (!root) return;

        addedSoFar += root.val;

        soFar.push(root.val);

        if (root.left === null && root.right === null) {
            if (addedSoFar === sum) {
                result.push(soFar.slice());
            }
        }

        dfs(root.left, soFar);
        dfs(root.right, soFar);

        addedSoFar -= root.val;
        soFar.pop(root.val);
    };

    dfs(root, []);
    return result;
};
