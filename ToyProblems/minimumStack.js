/*
Find the minimum element in a stack in CONSTANT time
*/

//Use two stacks, one for holding elements, one for holding corresponding min
'use strict';
function minStack() {
  this._stack = [];
  this._minStack = [];
  this._currentMin = null;
  this._size = 0;
};

minStack.prototype.push = function(item) {
  this._stack.push(item);
  //if item is a new minimum, set it to currentMin and push item to minStack
  if (item < this._currentMin || !this._currentMin) {
    this._minStack.push(item);
    this._currentMin = item;
  } else {
    //otherwise just push existing currentMin to minStack
    this._minStack.push(this._currentMin);
  }
  this._size++;
};

minStack.prototype.getMin = function() {
  return this._currentMin;
};

minStack.prototype.pop = function() {
  if (this._size === 0) {
    console.log("Can't pop from empty Stack!");
    return;
  }
  const popped = this._stack.pop();
  const lastMin = this._minStack.pop();
  if (lastMin === this._currentMin) {
    this._currentMin = this._minStack[this._minStack.length-1];
  }
  this._size--;
  return popped;
};

minStack.prototype.isEmpty = function() {
  return this._size === 0;
};

minStack.prototype.peek = function() {
  return this._stack[this._size-1];
};

minStack.prototype.size = function() {
  return this._size;
};

const newStack = new minStack();
newStack.push(4);
newStack.push(5);
newStack.push(3);
newStack.push(2);
newStack.push(9);
console.log(newStack);
console.log(newStack.getMin());
