/*
Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree(Not necessarily a BST). Avoid storing additional nodes in a data structure.


//Method 1 : Find path from root => p, path from root => q.
//Traverse both paths, find the mismatch point. The node RIGHT BEFORE the mismatch point is the common ancestor.
O(n)

//Method 2 : Using recursion and single traversal. O(n).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//Binary Tree
var lowestCommonAncestor = function(root, p, q) {
  const dfs = (root, p, q) => {
    if (!root) return null;

    //if either node is found, return root.
    if (root === p || root === q) {
      return root;
    }

    let leftLCA = dfs(root.left, p, q);
    let rightLCA = dfs(root.right, p, q);

    //Case 1: We've found a common ancestor
    if (leftLCA !== null && rightLCA !== null) {
      return root;
    }

    //if leftLCA has been found, return it. otherwise, return rightLCA.
    return leftLCA !== null ? leftLCA : rightLCA;
  };

  return dfs(root, p, q);
};

//Binary Search Tree
var lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
