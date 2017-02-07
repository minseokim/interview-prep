/*
Implement a stack that composes of several stacks and creates a new stack
when the previous one exceeds capacity.
SetOfStacks.pop() and SetOfStacks.push() should behave identically to a single stack
*/
'use strict';

function SetOfStacks(size) {
  this.stacks = [[]];
  this.numOfStacks = 1;
  this.stackCapacity = size;
}

SetOfStacks.prototype.push = function(item) {
  //get the last stack
  const lastStack = this.getLastStack();
  //check if it's full
  if (lastStack && lastStack.length < this.stackCapacity) {
    // console.log(`It's not full yet`);
    lastStack.push(item);
  } else {
    //create new stack
    this.numOfStacks++;
    const newStack = [];
    newStack.push(item);
    this.stacks.push(newStack);
  }
};

SetOfStacks.prototype.pop = function() {
  //check if last stack is empty
  const lastStack = this.getLastStack();
  //check if it's empty
  if (lastStack.length === 0) {
    throw new Error("Stack is empty!");
  }

  const elem = lastStack.pop();
  //check if this is the first element in a stack
  if (lastStack.length === 0) {
    // console.log('LAST ELEMENT, Remove this stack!');
    this.stacks.pop();
    this.numOfStacks--;
  }
  return elem;
};

SetOfStacks.prototype.peek = function() {
  //check if last stack is empty
  const lastStack = this.getLastStack();
  //check if it's empty
  if (lastStack.length === 0) {
    throw new Error("Stack is empty!");
  }

  return lastStack[lastStack.length-1];
};

SetOfStacks.prototype.getLastStack = function() {
  return this.stacks[this.numOfStacks-1];
};

const stack = new SetOfStacks(4);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
stack.push(6);
console.log(stack);