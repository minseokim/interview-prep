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


const inorderTraversal = function(root) {

  const stack = [];

  const helper = function(root) {
      if (root !== null) {
          helper(root.left);
          stack.push(root.val);
          helper(root.right);
      }
  };

  helper(root);

  return stack;
};

//left - root - right
const inorderTraversal = function(root) {

  const stack = [];
  const result = [];

  while (root || stack.length) {
    //push left
    while (root) {
      stack.push(root);
      root = root.left;
    }

    //pop, push and then go to right
    root = stack.pop();
    result.push(root.val);
    root = root.right;
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
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
    }

    return result;
};