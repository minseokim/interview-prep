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
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    var checkSymmetry = function(left, right) {
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
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    var queue = [];
    queue.push(root);
    queue.push(root);
    var t1, t2;

    while (queue.length) {
        t1 = queue.shift();
        t2 = queue.shift();

        if (t1 === null && t2 === null) {
            continue;
        }
        if (t1 === null || t2 === null) {
            return false;
        }

        if (t1.val !== t2.val) {
            return false;
        }

        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }
    return true;
};