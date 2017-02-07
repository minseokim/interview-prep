'use strict';

function binaryHeap(size) {
  this._array = [];
  this._size = 0;
}

binaryHeap.prototype.siftUp = function(index) {
  //check to see if : 1) it satisfies heap property and that 2) it's not at root
  while (index > 1 && this.lessThan(Math.floor(index/2), index)) {
    this.swap(index, Math.floor(index/2));
    index = Math.floor(index/2);
  }
};

binaryHeap.prototype.siftDown = function(index) {
  //check to see if 2 * index is inbounds
  while (2 * index <= this._size) {
    let childIndex = index * 2;

    //check that childIndex is inbounds and find GREATER child
    if (childIndex < this._size && this.lessThan(childIndex, childIndex+1)) {
      childIndex++;
    }

    //if child's key is indeed greater than parent, BREAK because we're done
    if (!this.lessThan(index, childIndex)) break;

    //otherwise, swap child with index
    this.swap(index, childIndex);

    //set index to childIndex
    index = childIndex;
  }
};

binaryHeap.prototype.insert = function(val) {
  //insert it at the end as leaf node, then sift it up!
  this._array[++this._size] = val;
  this.siftUp(this._size);
};

binaryHeap.prototype.deleteMax = function() {
  //swap root node with leaf, then swim root down, return leaf
  //save max's value to a variable
  const max = this._array[1];
  //swap it with last node
  this.swap(1, this._size);
  //sift root down
  this.siftDown(1);
  //set last node to null
  this._array[this._size] = null;

  this._size--;
  return max;
};

binaryHeap.prototype.lessThan = function(index1, index2) {
  return (this._array[index1] < this._array[index2]);
};

binaryHeap.prototype.getLeftChildIndex = function(index) {
  const leftChildIndex = 2 * index;
  //if leftChildIndex is >= to # of nodes, it's invalid
  if (leftChildIndex >= this._size) {
    return -1;
  }

  return leftChildIndex;
};

binaryHeap.prototype.getRightChildIndex = function(index) {
  const rightChildIndex = (2 * index) + 1;
  //if rightChildIndex is >= to # of nodes, it's invalid
  if (rightChildIndex >= this._size) {
    return -1;
  }

  return rightChildIndex;
};

binaryHeap.prototype.getParentIndex = function(index) {
  //if index is 0 or greater than # of nodes, out of range
  if (index < 1 || index > this._size) {
    return -1;
  }

  return Math.floor(index/2);
};

binaryHeap.prototype.swap = function(index1, index2) {
  const temp = this._array[index1];
  this._array[index1] = this._array[index2];
  this._array[index2] = temp;
};

binaryHeap.prototype.getCount = function() {
  return this._size;
};

binaryHeap.prototype.isEmpty = function() {
  return this._size === 0;
};

binaryHeap.prototype.getElementAtIndex = function(index) {
  return this._array[index];
};