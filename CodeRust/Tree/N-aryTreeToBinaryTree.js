/* Convert an N-ary tree to Binary tree and then convert this Binary tree back to its original N-ary tree structure. */

const nAryTreeToBinaryTree = function(root) {
  return convertRecurse(root, 1);
};

const convertRecurse = function(root, goingLeft) {
  if (!root) return;

  //first create a new BSTNode
  let binaryTreeNode = new TreeNode(root.val);
  //initialize last node variable as binaryTreeNode to start
  let lastNode = binaryTreeNode;

  for (let c in root.children) {
    //go left
    if (goingLeft === 1) {
      lastNode.left = convertRecurse(root.children[c], 0);
      //update lastNode
      lastNode = lastNode.left;
    } else {
      //go right(Case where child nodes have children)
      lastNode.right = convertRecurse(root.children[c], 1);
      lastNode = lastNode.right;
    }
  }

  return binaryTreeNode;
};

