'use strict';

function TreeNode(val) {
  this._data = val;
  this._leftChild = null;
  this._rightChild = null;
}

TreeNode.prototype.getData = function() {
  return this._data;
};

TreeNode.prototype.setData = function(val) {
  this._data = val;
};

TreeNode.prototype.getLeftChild = function() {
  return this._leftChild || null;
};

TreeNode.prototype.getRightChild = function() {
  return this._rightChild || null;
};

TreeNode.prototype.setLeftChild = function(val) {
  this._leftChild = new TreeNode(val);
  return this._leftChild;
};

TreeNode.prototype.setRightChild = function(val) {
  this._rightChild = new TreeNode(val);
  return this._rightChild;
};

TreeNode.prototype.BFTraverse = function(fn) {
  //check if root exists
  if (this._data === null) {
    return;
  }

  const queue = [];
  queue.push(this);
  while (queue.length !== 0) {
    const currentNode = queue.shift();

    fn(currentNode);
    //enqueue its left, then its right
    if (currentNode.getLeftChild()) {
      queue.push(currentNode.getLeftChild());
    }

    if (currentNode.getRightChild()) {
      queue.push(currentNode.getRightChild());
    }
  }
};

//Pre-Order DFTraverse
TreeNode.prototype.DFTraverse = function(fn) {
  if (!this.getData()) {
    return;
  }

  fn(this);
  if (this.getLeftChild()) {
    this.getLeftChild().DFTraverse(fn);
  }
  if (this.getRightChild()) {
    this.getRightChild().DFTraverse(fn);
  }
};

const tree = new TreeNode('A');
const leftChild = tree.setLeftChild('B');
const rightChild = tree.setRightChild('C');
const nextRightChild = rightChild.setLeftChild('D');
rightChild.setRightChild('E').setRightChild('G');
nextRightChild.setLeftChild('F');
nextRightChild.setRightChild('H');


//Breadth-First
// tree.BFTraverse((node) => {
//   console.log(node.getData());
// });

tree.DFTraverse((node) => {
  console.log(node.getData());
});