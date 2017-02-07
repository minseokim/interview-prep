'use strict';
/*
Priority Queue Implementation using a binary heap
*/

/*Constructor*/
function MaxPriorityQueue() {
  this._pq = [];
  this._size = 0;
}

/* compare element at key i with element at key j*/
MaxPriorityQueue.prototype.lessThan = function(i, j) {
  const result = this._pq[i] < this._pq[j];
  // console.log(this._pq[i], '<', this._pq[j], 'results in : ', result);
  return result;
};

MaxPriorityQueue.prototype.isEmpty = function() {
  return this._size === 0;
};

MaxPriorityQueue.prototype.insert = function(key) {
  this._pq[++this._size] = key;
  this.swim(this._size);
};

MaxPriorityQueue.prototype.deleteMax = function() {
  //save max to a variable
  const max = this._pq[1];
  //swap max with last node
  this.swap(1, this._size--);
  //sink down root's index(1)
  this.sink(1);
  //set last node's index to null to prevent loitering
  this._pq[this._size+1] = null;
  //return removed max
  return max;
};

/* Swims child's key up until heap order is restored */
MaxPriorityQueue.prototype.swim = function(index) {
  // console.log('index : ', index);
  //as long as we're not at the root, and child(index)'s key is larger than parent's key(index/2)
  //keep swapping
  while (index > 1 && this.lessThan(Math.floor(index/2), index)) {
    // console.log('UHOH, better swap something');
    this.swap(index, Math.floor(index/2));
    index = Math.floor(index/2);
  }
};

/* Sinks parent's key down until heap order is restored */
MaxPriorityQueue.prototype.sink = function(index) {
  //as long as the parent index is equal to/less than last index
  while (2*index <= this._size) {

    let childIndex = 2*index;
    //make sure childIndex is inbounds, and find the larger child(either 2k or 2k+1)
    if (childIndex < this._size && this.lessThan(childIndex, childIndex+1)) {
      childIndex++;
    }
    //parent's key is indeed greater than child's key, we're done
    if (!this.lessThan(index, childIndex)) break;

    //otherwise, swap parent key with child key
    this.swap(index, childIndex);

    //reset index to childIndex
    index = childIndex;
  }
};

MaxPriorityQueue.prototype.swap = function(a, b) {
  // console.log('--------PQ before swap :', this._pq);
  const temp = this._pq[a];
  this._pq[a] = this._pq[b];
  this._pq[b] = temp;
  // console.log('--------PQ after swap :', this._pq);
};

MaxPriorityQueue.prototype.getMax = function() {
  return this._pq[1];
};

const newPQ = new MaxPriorityQueue();

newPQ.insert(2);
newPQ.insert(7);
newPQ.insert(26);
newPQ.insert(25);
newPQ.insert(36);
newPQ.insert(4);

console.log(newPQ);
console.log(newPQ.deleteMax());
console.log(newPQ);
console.log(newPQ.deleteMax());
console.log(newPQ.deleteMax());
console.log(newPQ.deleteMax());
