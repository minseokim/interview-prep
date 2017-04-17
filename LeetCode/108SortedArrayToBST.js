/*Given an array where elements are sorted in ascending order, convert it to a height balanced BST.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedArrayToBST = function(nums, start, end) {

    if (start > end) {
        return null;
    }

    let mid = Math.floor((start + end)/2);

    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, start, mid-1);
    root.right = sortedArrayToBST(nums, mid+1, end);

    return root;
};

const sortedArrayToBSTMain = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  return sortedArrayToBST(nums, 0, nums.length-1);
}

console.log(sortedArrayToBSTMain([3,5,8]));