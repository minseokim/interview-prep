/*
Check if a binary tree is a binary search tree
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
 * @return {boolean}
 */

/*
Depth First Search solution :
  Use Lower Bound, Upper Bound
*/
const isValidBST = (root, lowerBound, upperBound) => {
  lowerBound = lowerBound || -Infinity;
  upperBound = upperBound || Infinity;

  //Base Case : If root is null, return true
  if (root === null) return true;

  //If it's invalid return false immediately
  if (root.val > upperBound || root.val < lowerBound) {
    return false;
  }

  //otherwise, call recursively
    //on root's left, upperBound now becomes original root value
      //on root's right, lowerBound now becomes original root value
    return isValidBST(root.left, lowerBound, root.val)
      && isValidBST(root.right, root.val, upperBound);
};

/*
Slightly longer, DFS Iterative Solution : IMPLEMENT ME
*/

/*
Recursive Solution :
  isLessThan fn
  isGreaterThan fn
  Make sure left subtree is less than root,
            right subtree is greater than root
*/

