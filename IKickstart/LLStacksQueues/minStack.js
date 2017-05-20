/* Solution using tuple */

//When storing value, store [value, currentMin]

const Stack = function() {
  this.storage = [];
}

Stack.prototype.push = function(elem) {
  let currentMin = this.getMinimum();
  //if it's a new minimum, update currentMin to elem.
  if (currentMin === null || elem <= currentMin) {
    currentMin = elem;
  }
  //store both elem, along with currentMin
  this.storage.push([elem, currentMin]);
}

Stack.prototype.pop = function(elem) {
  return this.storage.pop();
}

Stack.prototype.top = function(elem) {
  if (this.storage.length === 0) {
    return null;
  } else {
    return this.storage[this.storage.length-1][0];
  }
}

Stack.prototype.getMinimum = function() {
  if (this.storage.length === 0) {
    return null;
  } else {
    return this.storage[this.storage.length-1][1];
  }
}

/* Solution using extra stack */

const Stack = function() {
  this.minStack = [];
  this.storage = [];
  this.min = null;
}

Stack.prototype.push = function(elem) {
  if (this.min === null || elem < this.min) {
    this.minStack.push(elem);
    this.min = elem;
  }
  this.storage.push(elem);
}

Stack.prototype.pop = function(elem) {
  let popped = this.storage.pop();
  if (popped === this.min) {
    this.minStack.pop();
    if (this.minStack.length === 0) {
      this.min = null;
    } else {
      this.min = this.minStack[this.minStack.length-1];
    }
  }
}

Stack.prototype.getMinimum = function() {
  return this.min;
}



const stack1 = new Stack();
stack1.push(5);
stack1.push(1);
stack1.push(3);
stack1.push(2);
stack1.push(4);
stack1.push(0);
console.log(stack1.getMinimum());
stack1.pop();
console.log(stack1.getMinimum());
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1.getMinimum());
stack1.pop();
console.log(stack1.getMinimum());