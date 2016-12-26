function Queue() {
  this._storage = {};
  //maintain head and tail
    //add to tail
    //remove from head
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(item) {
  this._storage[this.tail] = item;
  this.tail++;
}

Queue.prototype.dequeue = function() {
  if (this.head <= this.tail) {
    const firstAdded = this._storage[this.head];
    delete this._storage[this.head];
    this.head++;
    return firstAdded;
  }
}

Queue.prototype.size = function() {
  return this.tail - this.head;
}

const myQueue = new Queue();
console.log(myQueue.size() === 0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue('b');
console.log(myQueue.size() === 3);
console.log(myQueue.dequeue() === 1);
console.log(myQueue.dequeue() === 2);
console.log(myQueue.size() === 1);