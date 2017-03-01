/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 //Recursive Solution
const isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    const checkSymmetry = function(left, right) {
        if (left === null && right === null) {
            return true;
        }
        if (left === null || right === null) {
            return false;
        }

        return (left.val === right.val) && checkSymmetry(left.left, right.right) && checkSymmetry(right.left, left.right);
    };

    return checkSymmetry(root.left, root.right);
};

//Iterative
const isSymmetric = function(root) {
    if (!root) return true;

    const queue = [];

    queue.push(root.left);
    queue.push(root.right);
    let t1, t2;

    while (queue.length) {
        t1 = queue.shift();
        t2 = queue.shift();
        //theyre both null, continue
        if (t1 === null && t2 === null) continue;

        //one of them is null return false
        if (t1 === null || t2 === null) return false;

        //if theyre not null, and value are unequal return false
        if (t1.val !== t2.val) return false;

        //push t1's left, then t2's right, then vice versa
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }

    return true;
};