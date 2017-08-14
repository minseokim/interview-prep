/*
Solution using one stack.

Just reverse the pre-order in the end.

*/

const postOrderIterative = root => {
  const stack = [];
  const resultStack = [];

  if (!root) return stack;
  //do pre-order but in reverse order(process right sub tree first, which means we want to push the left subtree first)
  let currentNode = root;
  stack.push(root);

  while (stack.length > 0) {
    currentNode = stack.pop();

    //push it to resultStack
    resultStack.push(currentNode.val);

    if (currentNode.left) {
      stack.push(currentNode.left);
    }

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }

  return resultStack.reverse();
};
