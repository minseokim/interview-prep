/*
Validate a BST given a binary tree!

BST === right subtree values are all greater, and left subtree values are all smaller.
*/

//In-order traversal
const validateBST = function(root, minimum, maximum) {

  const subroutine = function(root, min, max) {
    if (!root) return true;

    //if less than min, or greater than max, return false!
    if (root.val <= min || root.val >= max) {

      return false;
    }

    return subroutine(root.left, min, root.val) &&   subroutine(root.right, root.val, max);
  };

  return subroutine(root, -Infinity, Infinity);
};


//Iterative In-order solution
const validateBSTIter = function(root) {
  const stack = [];
  if (!root) return true;

  //initialize prev at null
  let prev = null;

  while (root || stack.length) {

    if (root) {
      stack.push(root);
      root = root.left;
      continue;
    }

    //root is null, pop up one level & check
    root = stack.pop();

    if (prev !== null && root.val <= prev.val) {
      return false;
    }

    prev = root;
    root = root.right;
  }

  return true;
};

//Alternative Solution : Go in-order, keeping track of prev node visited. Then since in-order has to be sorted, just check if current > prev.

const validateBSTAlt = function(root) {
  //asumes no nodes are negative
  let prev = -1;
  return validateBSTAltRec(root);
};

const validateBSTAltRec = function(root) {
  if (!root) return true;

  //go all the way down to the left first
  if (validateBSTAltRec(root.left) === false) {
    return false;
  }

  //check if prev is greater than root.data
  if (prev > root.data && prev !== -1) {
    return false;
  }

  //Set prev to be current root's data
  prev = root.data;

  if (validateBSTAltRec(root.right) === false) {
    return false;
  }

  return true;
};