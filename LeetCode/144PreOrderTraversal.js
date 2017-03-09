/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //Recursive solution

const preorderTraversal = function(root) {
    const stack = [];

    if (!root) return stack;

    const helper = function(root) {
        if (root !== null) {
            stack.push(root.val);
            helper(root.left);
            helper(root.right);
        }
    };

    helper(root);

    return stack;
};


/* PUSH LEFT second, because with LIFO we pop LEFT */
const preorderTraversal = function(root) {
    //initialize stack
    const stack = [root];
    const result = [];

    while (stack.length) {
        let node = stack.pop();
        if (node !== null) {
            result.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }

    return result;
};


//Alternative Solution
const preOrderTraversal = function(root) {
    const result = [];

    if (!root) return result;

    const stack = [];
    let node = root;

    while (stack.length || node !== null) {
        //if node exists, examine it and go left
        if (node !== null) {
            result.push(node.val);
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            node = node.right;
        }
    }

    return result;
};