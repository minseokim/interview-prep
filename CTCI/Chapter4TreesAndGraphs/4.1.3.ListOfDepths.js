/*
Given a BST, design an algorithm that creates a linked list
of all nodes at each depth
(If you have a tree with depth D, you'll have D linked lists)
*/

"use strict";

const LinkedList = require("../../DataStructures/LinkedListWithTail");
const TreeNode = require("../../DataStructures/BinaryTree");

/*
DFS : Use a pre-order traversal where we can pass level as an argument to recursive calls to left/right children.
*/

const listOfDepths = function(root) {
  const list = [];
  createLinkedList(root, 0, list);
  return list;
};

const createLinkedList = function(root, level, list) {
  if (root) {
    console.log("list :", list);
    console.log("root :", root);
    console.log("root data :", root._data);
    console.log("-------------------");
    //check if we've visited this depth before.
    if (!list[level]) {
      list[level] = new LinkedList(root._data);
    } else {
      //add to back of linked list at that depth
      list[level].addToBack(root._data);
    }

    createLinkedList(root._leftChild, level + 1, list);
    createLinkedList(root._rightChild, level + 1, list);
  }
};

/*
BFS
*/

const listOfDepthsBFS = function(root) {
  const list = [];
  const queue = [];
  let current;
  let node;
  let depth;

  queue.push([root, 0]);

  while (queue.length > 0) {
    current = queue.shift();
    node = current[0];
    depth = current[1];

    //check if we've stored any nodes at this depth
    if (!list[depth]) {
      list[depth] = new LinkedList(node._data);
    } else {
      list[depth].addToBack(node._data);
    }

    if (node.leftChild) {
      queue.push([node.leftChild, depth + 1]);
    }

    if (node.rightChild) {
      queue.push([node.rightChild, depth + 1]);
    }
  }

  return list;
};

const tree = new TreeNode("A");
const b = tree.setLeftChild("B");
const c = tree.setRightChild("C");
const d = b.setLeftChild("D");
b.setRightChild("E");
const f = c.setLeftChild("F");
c.setRightChild("G");
d.setLeftChild("H");
f.setLeftChild("I");
// console.log(tree);

console.log(listOfDepths(tree));
