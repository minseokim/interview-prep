'use strict';

function Queue() {
  this.inStack = [];
  this.outStack = [];
  this.size = 0;
};

Queue.prototype.enqueue = function(elem) {
  this.inStack.push(elem);
  this.size++;
}

Queue.prototype.dequeue = function() {
  //Case 1. Dequeuing from an empty outStack
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  } else {
  //Case 2. Dequeuing from a non-empty outStack
  //Just return top of outStack
    return this.outStack.pop();
  }
}

let queue1 = new Queue();
queue1.enqueue('a');
queue1.enqueue('b');
queue1.enqueue('c');
console.log(queue1.dequeue());
console.log(queue1);
queue1.enqueue('d');
console.log(queue1);
console.log(queue1.dequeue());
console.log(queue1);