const inorderIter = root => {
  const stack = [];
  const result = [];
  currentNode = root;

  while (stack.length > 0 || currentNode !== null) {
    //keep pushing left
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    //visit it
    result.push(currentNode.val);

    currentNode = currentNode.right;
  }

  return result;
};
