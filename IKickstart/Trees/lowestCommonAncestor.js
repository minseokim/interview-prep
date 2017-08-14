/*
Using recursion, at every node we'll check if it's either n1 or n2, in which case we'll return the root value.

Then we check recursively on the left-subtree/right-subtree. If they've both bubbled up to a value, we've FOUND our LCA, so we return it.

Otherwise, we return whichever one of leftLCA / rightLCA isn't null.
*/

function findLCA(root, n1, n2) {
  if (!root) return null;

  if (root === n1 || root === n2) {
    return root;
  }

  let leftLCA = findLCA(root.left, n1, n2);
  let rightLCA = findLCA(root.right, n1, n2);

  if (leftLCA !== null && rightLCA !== null) {
    return root;
  }

  return leftLCA || rightLCA;
}

//If it's a BST :
//Assuming that both n1 and n2 are present

function findLCABST(root, n1, n2) {}
