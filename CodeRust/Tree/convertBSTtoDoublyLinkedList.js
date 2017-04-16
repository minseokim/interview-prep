/*Given a binary tree, convert it to a doubly linked list such that the order of doubly linked list is the same as in-order traversal of the binary tree.*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function ListNode(val) {
  this.val = val;
  this.next = this.prev = null;
}

//Divide and Conquer Approach that doesn't create new ListNodes but creates a linked list in-place --- Come back to this one

//Naïve Solution That Creates new List : As we traverse in-order, remember the previous element so that we can set the links. Start out by creating a fakeHead, and once we find our first node we can set that as the head of the doubly-linked list.

const convertBSTToLinkedList = function(root) {
  if (!root) return null;
  let fakeHead = new ListNode(-1);
  let prevNode = fakeHead;

  const subroutine = function(root) {
    if (!root) return;

    subroutine(root.left);

    //connect prevNode with root
    let currentNode = new ListNode(root.val);
    prevNode.next = currentNode;
    currentNode.prev = prevNode;
    prevNode = currentNode;

    subroutine(root.right);
  };

  subroutine(root);

  fakeHead.next.prev = null;
  return fakeHead.next;
};

const newTree = new TreeNode(100);
newTree.left = new TreeNode(50);
newTree.left.right = new TreeNode(75);
newTree.left.right.left = new TreeNode(60);
newTree.left.left = new TreeNode(25);
newTree.left.left.right = new TreeNode(30);
newTree.right = new TreeNode(200);
newTree.right.left = new TreeNode(125);
newTree.right.right = new TreeNode(350);

console.log(convertBSTToLinkedList(newTree));
