/*
Implement min stack that has push, pop, min in O(1) time
*/

'use strict';

/*
Solution 1 : Use another stack to store minimum that corresponds to each element
  Only push to minStack if it's a new minimum
  Only pop from minStack if element being popped IS the current Minimum
*/

function minStack() {
  this.storage = [];
  this.minStack = [];
  this.size = 0;
}

minStack.prototype.push = function(item) {
  //stack is empty, push both to minStack and storage
  if (this.size === 0) {
    this.minStack.push(item);
  } else {
    //push to storage, check if this is a new minimum
    const currentMin = this.getMin();
    if (item < currentMin) this.minStack.push(item);
  }
  this.storage.push(item);
  this.size++;
};

minStack.prototype.pop = function() {
  //just pop both storage and minStack
  const elem = this.storage.pop();
  if (elem === this.getMin()) this.minStack.pop();
  this.size--;
  return elem;
};

minStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length-1];
};

const newMinStack = new minStack();
newMinStack.push(8);
newMinStack.push(1);
newMinStack.push(3);
newMinStack.push(4);
newMinStack.push(0);
newMinStack.push(7);
newMinStack.push(5);
console.log(newMinStack);
// console.log(newMinStack.pop());
// console.log(newMinStack.getMin());
// console.log(newMinStack.pop());
// console.log(newMinStack.getMin());