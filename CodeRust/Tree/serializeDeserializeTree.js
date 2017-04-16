/*Serialize binary tree to a stream and then deserialize it back to an in-memory tree such that original and deserialized trees are identical.*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//Use depth-first traversal, pre-order traversal. Serialize some marker to represent a null pointer to help de-serialize it.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const stream = [];
  const MARKER = "*";

  const subroutine = function(node) {

    //if it's a null node, store MARKER
    if (!node) {
      stream.push(MARKER);
      return;
    }

    //store the node's value

    stream.push(node.val);
    subroutine(node.left);
    subroutine(node.right);
  }

  subroutine(root);
  let string = stream.toString();
  return string;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(stream) {

  const streamArray = stream.split(",");
  console.log(streamArray);
  const MARKER = "*";

  const subroutine = function(stream) {
    //wrap it in a try-catch block
    try {
      let data = stream.shift();
      //if it's a null node, return null
      if (data === "*") {
        return null;
      }
      let node = new TreeNode(Number(data));
      node.left = subroutine(stream);
      node.right = subroutine(stream);
      return node;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  let root = subroutine(streamArray);

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


const newTree = new TreeNode(100);
newTree.left = new TreeNode(50);
newTree.left.right = new TreeNode(75);
newTree.left.right.left = new TreeNode(60);
newTree.left.left = new TreeNode(25);
newTree.left.left.right = new TreeNode(30);
newTree.right = new TreeNode(200);
newTree.right.left = new TreeNode(125);
newTree.right.right = new TreeNode(350);
console.log(serialize(newTree));

console.log(deserialize(serialize(newTree)));