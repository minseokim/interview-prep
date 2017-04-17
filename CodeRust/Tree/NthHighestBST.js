/*We are given a Binary Search Tree(BST) and a node number n. We have to find the node with nth highest value.*/

//Basic Approach : Do in-order, since that will give us BST in order, but reverse. So start by going right, and when we pop from stack, go left.


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const nthLargestBSTNode = function(root, n) {
  if (!root || n < 1) return null;

  const stack = [];
  let currentNode = root;
  let count = 1;

  while (stack.length || currentNode) {

    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.right;
      continue;
    }

    currentNode = stack.pop();

    //check if count equals currentNode ONLY after popping from stack, since that's when we examine each node.
    if (count === n) {
      return currentNode;
    }

    currentNode = currentNode.left;

    //increment count since we're looking at new element.
    count++;
  }

  return null;
}

const nthLargestBSTNodeAlt = function(node, n) {
  let currentCount = 0;

  const subroutine = function(node, n) {
    if (!node) return null;

    let result = subroutine(node.right, n);
    if (result) {
      return result;
    }

    currentCount++;

    if (n === currentCount) {
      return node;
    }

    result = subroutine(node.left, n);
    if (result) {
      return result;
    }
    //node not found
    return null;
  }
  return subroutine(node, n);
};



const newTree = new TreeNode(100);
newTree.left = new TreeNode(50);
newTree.left.right = new TreeNode(75);
newTree.left.left = new TreeNode(25);
newTree.right = new TreeNode(200);
newTree.right.left = new TreeNode(125);
newTree.right.right = new TreeNode(350);

console.log(nthLargestBSTNode(newTree, 2));