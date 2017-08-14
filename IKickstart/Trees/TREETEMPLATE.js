//Handle simple trees(two nodes, and three nodes)
//Then handle base cases(one node, and NULL TREE(No nodes))

//THIS IS A template that can be used for many tree problems
//Key here is to assign the left right values to a variable.

const treeSum = root => {
  if (!root) return 0;

  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);

  return leftSum + rightSum + root.val;
};

/*
INSERT Template
*/
const insert = (node, value) => {
  if (node === null) {
    node = new Node(value);
  } else if (node.val < value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }

  return node;
};
