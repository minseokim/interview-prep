/*Given the root node of a binary tree, print nodes forming the boundary (perimeter).*/


/*
Approach :
1. Print the root node
2. Print left-boundary in top-down order
3. Print leaf nodes in left-right order
4. Print right-boundary in bottom-up order using a stack.
*/

const printLeftPerimeter = function(root) {
  while (root) {
    let current = root.val;

    if (root.left) {
      root = root.left;
    } else if (root.right) {
      //if left doesnt exist but right does, go right since that will be the 'left perimeter'
      root = root.right;
    } else {
      //leaf node
      break;
    }

    console.log(current + " ");
  }
};


const printLeafNodes = function(root) {

  if (root) {
    printLeafNodes(root.left);
    if (!root.left && !root.right) {
      console.log(root.val + " ");
    }
    printLeafNodes(root.right);
  }
};


const printRightPerimeter = function(root) {
  //use a stack since we want to print bottom-top
  let stack = [];

  while (root) {
    let currentVal = root.val;

    if (root.right) {
      root = root.right;
    } else if (root.left) {
      root = root.left;
    } else {
      break;
    }
    stack.push(currentVal);
  }

  //pop from stack and print
  while (stack.length) {
    console.log(stack.pop() + " ");
  }
};


const displayTreePerimeter = function(root) {

  if (root) {
    //print root's value first
    console.log(root.val + " ");

    //print left perimeter
    printLeftPerimeter(root.left);

    //if it has children
    if (root.left || root.right) {
      printLeafNodes(root);
    }

    //print right perimeter
    printRightPerimeter(root.right);
  }
};