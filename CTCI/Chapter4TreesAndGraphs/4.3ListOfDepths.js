/*
Given a BST, design an algorithm that creates a linked list
of all nodes at each depth
(If you have a tree with depth D, you'll have D linked lists)
*/

"use strict";

const LinkedList = require("../../DataStructures/LinkedListWithTail");
const TreeNode = require("../../DataStructures/BinaryTree");

/*
DFS Algorithm(Pre-Order)
*/
const createLinkedList = (root, lists, level) => {
  //base case
  if (root === null) return;

  lists = lists || [];

  level = level || 0;

  let newHead = null;

  //if the length of lists is equal to current level,
  //this means this is a new level to add
  //[root1, root2]    level = 2
  if (lists.length === level) {
    //initialize start of new linked list
    newHead = new LinkedList();
    //add it to lists
    lists.push(newHead);
  } else {
    //linked list at current level already exists, get it
    //[root1, root2]     level = 1
    newHead = lists[level];
  }

  newHead.addToBack(root);
  createLinkedList(root.left, lists, level + 1);
  createLinkedList(root.right, lists, level + 1);
};

/*
BFS Algorithm
  - Logic is correct, but INFINITE LOOP AS OF RIGHT NOW.
*/
const createLinkedListBF = root => {
  const listOfLinks = [];

  let currentNode = new LinkedList();

  let parentRoot;

  //"Visit" the root first
  if (root !== null) currentNode.addToBack(root);

  while (currentNode.size() > 0) {
    //add previous level first
    listOfLinks.push(currentNode);
    //Go to next level, grab parent root's head
    parentRoot = currentNode.head;
    //start a new linked list since it's a new level
    currentNode = new LinkedList();

    //Need to check ALL the nodes in parentRoot
    while (parentRoot !== null) {
      //check if parent has left or right, if so add to currentNode
      if (parentRoot.leftChild !== null) {
        currentNode.addToBack(parentRoot.leftChild);
      }

      if (parentRoot.rightChild !== null) {
        currentNode.addToBack(parentRoot.rightChild);
      }
      parentRoot = parentRoot.next;
    }
  }

  return listOfLinks;
};

// const tree = new TreeNode("A");
// const b = tree.setLeftChild("B");
// const c = tree.setRightChild("C");
// const d = b.setLeftChild("D");
// b.setRightChild("E");
// const f = c.setLeftChild("F");
// c.setRightChild("G");
// d.setLeftChild("H");
// f.setLeftChild("I");
// // console.log(tree);

// console.log(createLinkedListBF(tree));
