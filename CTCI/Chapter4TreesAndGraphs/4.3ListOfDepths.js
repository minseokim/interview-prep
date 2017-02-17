/*
Given a BST, design an algorithm that creates a linked list
of all nodes at each depth
(If you have a tree with depth D, you'll have D linked lists)
*/

'use strict';

const LinkedList = require('../../DataStructures/LinkedListWithTail');
const BSTNode = require('../../DataStructures/BinarySearchTree');

//Basic Linked List Implementation

function Node(val) {
  if (!val) {
    this.data = null;
  } else {
    this.data = val;
  }
  this.next = null;
}

Node.prototype.addToBack = function(val) {
  let current = this;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = new Node(val);
}


/*
BFS Algorithm
*/
const generateLinksBFS = (root) => {
  const result = [];

  let currentNode = new LinkedList();
  let parents;
  let currentParent;

  //Visit the root
  if (root !== null) {
    currentNode.addToBack(root);
  }

  while (currentNode !== null) {
    //Add current level of linked list to result
    result.push(currentNode);
    //go to next level
    parents = currentNode;

    //clear currentNode to initialize new link
    currentNode = new LinkedList();

    let currentParent = parents;

    while (currentParent !== null) {

      if (currentParent.leftChild) {
        currentNode.addToBack(currentNode.leftChild);
      }

      if (currentParent.rightChild) {
        currentNode.addToBack(currentNode.rightChild);
      }

      // if (currentParent.tail === null) {
      //   currentParent = null;
      // } else {
      //   currentParent = currentParent.tail.next;
      // }
      //Not working, implement linked list iterator to fix this
      // currentParent = currentParent.tail === null ? null : currentParent.tail.next;
    }
  }

  return result;
};

/* Test */
const newBST = new BSTNode(7);
newBST.insert(5);
newBST.insert(6);
newBST.insert(4);
newBST.insert(2);
newBST.insert(3);
newBST.insert(12);
newBST.insert(10);
newBST.insert(13);
newBST.insert(8);
newBST.insert(11);

// console.log(newBST.bfPrint());

// console.log(newBST.bfPrint());
const nodeTable = generateLinksBFS(newBST);
// console.log(nodeTable[2]);
// let currentRoot = nodeTable[3];
// let count = 0;

// while (currentRoot !== null) {
//   console.log(currentRoot.data);
//   console.log('---------------');
//   currentRoot = currentRoot.next;
//   count++;
// }
// console.log(currentRoot);
