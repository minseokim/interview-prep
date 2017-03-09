/* InOrder : Left - Root - Right */

/* Iterative Solution */
const inOrderTraversal = function(root) {
  if (!root) return null;

  const stack = [];

  while (stack.length || root) {

    //push all the left
    if (root) {
      stack.push(root);
      root = root.left;
      continue;
    }

    //pop
    let current = stack.pop();

    //DO something w/ pop
    console.log(current.data);

    root = root.right;
  }
};