'use strict';

function BSTNode(val) {
  this.data = val;
  this.leftChild = null;
  this.rightChild = null;
}

BSTNode.prototype.insert = function(val) {
  if (!val) return null;

  const newNode = new BSTNode(val);

  if (val > this.data) {
    this.rightChild === null ? this.rightChild = newNode : this.rightChild.insert(val);
  } else if (val <= this.data) {
    this.leftChild === null ? this.leftChild = newNode : this.leftChild.insert(val);
  }

  return newNode;
};

BSTNode.prototype.lookup = function(val) {
  if (!val) return null;

  if (this.data === val) {
    return true;
  } else if (this.data < val) {
    if (this.rightChild === null) {
      return false;
    } else {
      return this.rightChild.lookup(val);
    }
  } else {

    if (this.leftChild === null) {
      return false;
    } else {
      return this.leftChild.lookup(val);
    }
  }
};

BSTNode.prototype.bfPrint = function() {

  const queue = [];
  queue.push(this);

  while (queue.length) {
    let firstNode = queue.shift();
    console.log(firstNode.data);
    if (firstNode.leftChild) {
      queue.push(firstNode.leftChild);
    }

    if (firstNode.rightChild) {
      queue.push(firstNode.rightChild);
    }
  }

}

const root = new BSTNode(6);
root.insert(7);
root.insert(10);
root.insert(17);
root.insert(4);
root.insert(5);

console.log(root.lookup(6));
