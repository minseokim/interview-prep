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

  let currentNode = root;

  while (currentNode || stack.length) {
    //push left
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    //pop, push and then go to right
    currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return result;
};



//Alternative Solution
const inOrderTraversal = function(root) {
    const result = [];
    const stack = [];

    if (!root) return result;

    let node = root;

    while (stack.length || node !== null) {
        //if node exists, go left
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            //otherwise pop it, examine it and go right
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
    }

    return result;
};