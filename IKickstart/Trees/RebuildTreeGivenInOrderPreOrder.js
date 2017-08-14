/*
Given a in-order and pre-order traversal, write a function to rebuild the tree.
//ASK if duplicates exist in the tree, because that may result in trees with same values but different structures.

7        7
 \      /
  7    7


*/
//The intuition is that we need an in-order traversal to rebuild it.
//We'll need pre-order because the first element in the pre-order is the root. So what we can then do is find the root in in-order, and then divide the tree into left half and right half.
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  //hash table from value ==> index for inorder
  const inOrderIndices = {};
  inorder.forEach((element, index) => {
    inOrderIndices[element] = index;
  });
  //Keep track of :
  //preOrderStart : that's the element to be used as root value(New node that's being created)
  //Start index & end index of the inorder traversal(Divide the array into two halves)

  const recurse = (preOrderStart, inOrderStart, inOrderEnd) => {
    //Return null for base case, which is when inStart > inEnd OR preOrderStart EXCEEDS the last index in preorder
    if (inOrderStart > inOrderEnd || preOrderStart > preorder.length - 1) {
      return null;
    }
    //create a new root with preOrderStart
    let root = new TreeNode(preorder[preOrderStart]);
    //Find the index of this element in Inorder
    let inOrderIndex = inOrderIndices[preorder[preOrderStart]];

    root.left = recurse(preOrderStart + 1, inOrderStart, inOrderIndex - 1);

    //Need to find the index of root of RIGHT SUBTREE to be used in preorder.
    //We CANT just do preOrderStart+1, we have to find the offset.
    //We look at the # of elements to the LEFT of inOrderIndex to find the offset.
    let offset = inOrderIndex - inOrderStart;
    //then we simply add preOrderStart to it, followed by 1(Since we want the next element).
    let rightRootIndex = preOrderStart + offset + 1;
    root.right = recurse(rightRootIndex, inOrderIndex + 1, inOrderEnd);

    return root;
  };

  return recurse(0, 0, inorder.length - 1);
};
