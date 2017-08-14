/*
 * Complete the function below.
 */
function cloneTree(node) {
  const copyTreeRecurse = node => {
    let newRoot = null;
    if (node) {
      newRoot = new Node(node.val);
      newRoot.left = copyTreeRecurse(node.left);
      newRoot.right = copyTreeRecurse(node.right);
    }
    return newRoot;
  };

  return copyTreeRecurse(node);
}
