/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = [];

  //push root and keep going all the way to the left
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  if (!this.stack || this.stack.length === 0) {
    return false;
  } else {
    return true;
  }
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  //handle edge cases
  if (!this.stack || this.stack.length === 0) {
    return null;
  }

  let currentNode = this.stack.pop();

  let rightChild = currentNode.right;

  while (rightChild) {
    this.stack.push(rightChild);
    rightChild = rightChild.left;
  }

  return currentNode.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
