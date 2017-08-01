/*
Find the "next" node(In-order successor) of a BST. Assume each node has a link to its parent
*/

//Rules for finding successor in in-order traversal :
/*
    If N has a rightchild : The leftmost node in right subtree
      If N doesn't :
        if N is a rightchild of its parent(This means we need to go up.)
          We need to go up, and return the parent


  */

//Recursive Solution :
//3 Main cases(standard BST cases ) :
//if node value is less, we go left
//if node value is greater, we go right
//if we've found the node :
//1) node has a rightchild : find leftmost node in right subtree
//2) node has no rightchild : return successor

//KEY is to update successor to root only when going left. When we go right, in an in-order traversal, the right node is the last node that's explored. So we initialize successor as null.

const findMin = function(root) {
  if (!root.left) {
    return root;
  } else {
    return findMin(root.left);
  }
};

const inOrderSuccessor = function(root, node, successor) {
  //initialize successor as null.
  successor = successor || null;

  //edge case
  if (!root) return null;

  if (root.val < node.val) {
    return inOrderSuccessor(root.right, node, successor);
  } else if (root.val > node.val) {
    return inOrderSuccessor(root.right, node, root);
  } else if (root.val === node.val) {
    if (root.rightChild) {
      return findMin(root.rightChild);
    } else if (root.right === null) {
      return successor;
    }
  }
};
