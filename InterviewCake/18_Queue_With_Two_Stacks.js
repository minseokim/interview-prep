'use strict';
function Stack() {
  this._size = 0;
  this.top = null;
  this._storage = {};
}

Stack.prototype.push = function(item) {
  this._storage[this._size] = item;
  this._size++;
  this.top = item;
}

Stack.prototype.pop = function() {
  if (this._size > 0) {
    this._size--;
    const lastAdded = this._storage[this._size];
    delete this._storage[this._size];
    //reset top
    this.top = this._storage[this._size-1] || null;
    return lastAdded;
  }
}

Stack.prototype.peek = function() {
  return this.top;
}

Stack.prototype.size = function() {
  return this._size;
}

Stack.prototype.isEmpty = function() {
  return this._size === 0;
}

//Implementing Queue with Two Stacks

function Queue() {
  this.inStack = new Stack();
  this.outStack = new Stack();
}

Queue.prototype.enqueue = function(item) {
  //just push to inStack
  this.inStack.push(item);
}

Queue.prototype.dequeue = function() {
  //Case 1 : outStack is empty. Transfer all items to outStack and pop the top
  if (this.outStack.isEmpty()) {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  } else {
    //Case 2 : There's elements on outStack. Just pop and return, since this is the oldest item
    return this.outStack.pop();
  }
}

Queue.prototype.peek = function() {
  //Case 1 : outStack is empty. Transfer all items to outStack and pop the top
  if (this.outStack.isEmpty()) {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.peek();
  } else {
    //Case 2 : There's elements on outStack. Just pop and return, since this is the oldest item
    return this.outStack.peek();
  }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
console.log(myQueue.dequeue()); // 5
console.log(myQueue.dequeue()); // 6
myQueue.enqueue(8);
myQueue.enqueue(9);
console.log(myQueue.peek()); //7