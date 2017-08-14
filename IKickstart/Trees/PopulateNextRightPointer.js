/*
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6

The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6

*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

//Simple Recursive
//Assuming that the binary tree is full and all have two children, we only have to worry about connecting two cases :
//1) Connecting the root's leftChild to the root's rightChild. This happens if root's left exists.
// 2) Connecting root's right with root's next's left. This ONLY HAPPENS if root's NEXT isn't null && root's left exists.

//BFS Iterative
var connect = function(root) {
  const queue = [];
  let currentDepth = 0;
  let nextNode;
  let nextDepth;
  let current;
  let currentNode;

  queue.push([root, currentDepth]);

  while (queue.length > 0 && root) {
    current = queue.shift();
    currentNode = current[0];
    currentDepth = current[1];

    //set right to null by default
    currentNode.next = null;

    if (queue[0]) {
      nextNode = queue[0][0];
      nextDepth = queue[0][1];
      if (nextDepth === currentDepth) {
        currentNode.next = nextNode;
      }
    }

    if (currentNode.left) {
      queue.push([currentNode.left, currentDepth + 1]);
    }

    if (currentNode.right) {
      queue.push([currentNode.right, currentDepth + 1]);
    }
  }
};

const root = new TreeLinkNode(1);
root.right = new TreeLinkNode(3);
root.left = new TreeLinkNode(2);

console.log(connect(root));
