/*Inorder successor of a node in binary tree is the next node in inorder traversal. Write a method to find inorder successor of a given binary tree node in binary search tree given parent pointers*/

//If we're given parent pointers, the logic is the same except it makes our job easier. If our node has a rightChild, we simply find the minimum of rightChild. If it doesn't have a rightChild, we check if currentNode is a leftChild of parent. If it is, just return parent. If it's a rightChild, we have to go up until we find the closest ancestor whose left subtree includes our node.

const findMin = function(root) {
  if (!root) {
    return null;
  }
  while (root) {
    root = root.left;
  }

  return root;
}

const findSuccessorHelper = function(node) {
  //at this point we're at the node.
  if (!node) return null;

  if (node.right) {
    return findMin(node.right);
  }

  else if (node.right === null) {
    //keep going to parent until parents left is node
    while (node.parent) {
      if (node.parent.left === node) {
        return node.parent;
      }
      node = node.parent;
    }
  }
}

const findInOrderSuccessor = function(root, d) {
  while (root) {
    if (root.data < d) {
      root = root.right;
    } else if (root.data > d) {
      root = root.left;
    } else {
      return findSuccessorHelper(root);
    }
  }

  return null;
}