/*
Use single array to build three stacks!
*/
'use strict';
/*
Solution 1 : Stacks are of FIXED size
Divide array into 3 equal parts, and allow them to grow within the constraint
*/


function FixedMultiStack(size) {
  this.numberOfStacks = 3;
  this.stackCapacity = size;
  this.storage = new Array(this.stackCapacity * this.numberOfStacks);
  this.makeSizeArray();
}

FixedMultiStack.prototype.makeSizeArray = function() {
  this.sizes = new Array(this.numberOfStacks);
  for (let i = 0; i < this.sizes.length; i++) {
    this.sizes[i] = 0;
  }
  // console.log('size array :', this.sizes);
};

FixedMultiStack.prototype.push = function(stackNum, val) {
  //check if stack is full
  if (this.isFull(stackNum)) throw new Error("Stack" + stackNum + " is full!");

  //get top index of respective stack
  let index = this.topIndex(stackNum);
  this.storage[index+1] = val;
  this.sizes[stackNum]++;
};

FixedMultiStack.prototype.pop = function(stackNum) {
  //check if stack is empty
  if (this.sizes[stackNum] === 0) throw new Error("Stack" + stackNum + "is empty!");

  //get top index
  let index = this.topIndex(stackNum);
  const elem = this.storage[index];
  this.storage[index] = null;
  this.sizes[stackNum]--;
  return elem;
};

FixedMultiStack.prototype.peek = function(stackNum) {
  if (this.isEmpty(stackNum)) throw new Error("Stack" + stackNum + "is Empty!");

  return this.storage[this.topIndex(stackNum)];
};

FixedMultiStack.prototype.isEmpty = function(stackNum) {
  return this.sizes[stackNum] === 0;
}

FixedMultiStack.prototype.getSize = function(stackNum) {
  return this.sizes[stackNum];
};

FixedMultiStack.prototype.isFull = function(stackNum) {
  return this.sizes[stackNum] === this.stackCapacity;
};

FixedMultiStack.prototype.topIndex = function(stackNum) {
  //offset refers to the start index of the stack we want to look at
  const offset = stackNum * this.stackCapacity;
  //get the size of this stack
  const size = this.sizes[stackNum];
  //add those two together, decrement it
  return offset + size - 1;
};

const newMultiStack = new FixedMultiStack(4);
newMultiStack.push(0, "a");
newMultiStack.push(1, "c");
newMultiStack.push(2, "b");
newMultiStack.push(2, "d");
newMultiStack.push(2, "e");
newMultiStack.push(2, "f");
newMultiStack.push(0, "z");
// newMultiStack.push(2, "e");
newMultiStack.pop(2);
newMultiStack.pop(2);
newMultiStack.pop(2);
console.log(newMultiStack.peek(1));
console.log(newMultiStack);

