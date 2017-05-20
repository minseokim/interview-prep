'use strict';
function CircularQueue(capacity) {
  //-1 is a special value to denote empty circularQueue
  this.headIndex = -1;
  this.tailIndex = -1;
  this.capacity = capacity;
  this.buffer = new Array(this.capacity);
}

CircularQueue.prototype.isFull = function() {
  const nextIndex = (this.tailIndex + 1) % this.capacity;
  return nextIndex === this.headIndex;
};

CircularQueue.prototype.enqueue = function(item) {
  if (this.isFull()) throw new Error('Queue is already full!');
  //mod it so we can wrap around if tailIndex is at the end of the buffer
  this.tailIndex = (this.tailIndex + 1) % this.capacity;
  this.buffer[this.tailIndex] = item;
  //if this is the first element, set the head index properly
  if (this.headIndex === -1) {
    this.headIndex = this.tailIndex;
  }
};

CircularQueue.prototype.dequeue = function() {
  //Handle dequeuing from an empty queue
  if (this.isEmpty()) throw new Error("Can't dequeue from already empty queue");

  const item = this.buffer[this.headIndex];
  //if there was only one element, now the queue is empty
  if (this.headIndex === this.tailIndex) {
    this.headIndex = -1;
    this.tailIndex = -1;
  } else {
    //readjust headIndex, and set it to null
    this.buffer[this.headIndex] = null;
    this.headIndex = (this.headIndex+1) % this.capacity;
  }
  return item;
};

CircularQueue.prototype.isEmpty = function() {
  return this.headIndex === -1;
};

CircularQueue.prototype.peek = function() {
  //Handle peeking from an empty queue
  if (this.isEmpty()) {
    throw new Error("Can't peek from an empty queue!");
  }

  return this.buffer[this.headIndex];
};

const newQueue = new CircularQueue(6);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);
newQueue.enqueue(9);
console.log(newQueue);
// newQueue.dequeue();
// console.log(newQueue);
// newQueue.dequeue();
// console.log(newQueue);
// newQueue.dequeue();
// console.log(newQueue);
// newQueue.enqueue(7);
// console.log(newQueue);
// newQueue.enqueue(7);
// console.log(newQueue);
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
// console.log(newQueue);
// newQueue.dequeue();
// console.log(newQueue);
// console.log(newQueue.isEmpty());
// newQueue.dequeue();