/*Given a binary tree, connect its siblings at each level. Let's consider the following binary tree as an example.*/

/*
Basic Approach :
1. Traverse nodes at level 'x' from left-> right while connecting siblings at level 'x+1'
2. Now that we've finished connecting 'x+1', use the 'head'(left-most) node at 'x+1' to apply the same thing to 'x+2'

*/

const connectSameLevelSiblings = function(root) {
  if (!root) return null;

  root.next = null;

  while (root) {
    root = connectNextLevel(root);
  }
}

const connectNextLevel = function(root) {
  let currentNode = root;
  let nextLevelHead = null;
  //use prev to keep track of previously connected nodes
  let prev = null;


  while (currentNode) {
    //Case 1 : Both left and rightChild
    if (currentNode.left && currentNode.right) {
      //check if nextLevelHead exists. Set it to current's leftChild
      if (!nextLevelHead) {
        nextLevelHead = currentNodeleft;
      }

      //connect left to right
      currentNode.left.next = currentNode.right;

      //reset prev's next pointer. If it exists, connect it to current's left
      if (prev) {
        prev.next = currentNode.left;
      }
      //since we're connecting left->right, prev will be the right node.
      prev = currentNode.right;
    }
    //Case 2 : Only leftChild
    else if (currentNode.left) {
      if (!nextLevelHead) {
        nextLevelHead = currentNode.left;
      }

      if (prev) {
        prev.next = currentNode.left;
      }

      //reset prev to currentNode's right
      prev = currentNode.left;
    }
    else if (currentNode.right) {
    //Case 3 : Only rightChild
      if (!nextLevelHead) {
        nextLevelHead = currentNode.right;
      }

      if (prev) {
        prev.next = currentNode.right;
      }

      prev = currentNode.right;
    }

    currentNode = currentNode.next;
  }

  //Last node.
  if (prev) {
    prev.next = null;
  }

  return nextLevelHead;
};