const preOrderIter = root => {
  const stack = [];
  const result = [];

  stack.push(root);
  let current = root;

  while (stack.length > 0) {
    current = stack.pop();
    //process it
    console.log(current);

    //put right first
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }
};
