/*
 * Complete the function below.
 */
function flipTree(node) {
  if (!node) return null;

  //invoke flipTree for leftChild and rightChild
  flipTree(node.left);
  flipTree(node.right);

  //swap left and right nodes
  let temp = node.left;

  node.left = node.right;
  node.right = temp;

  return node;
}
