/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queueOne = [];
  this.queueTwo = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  //push everything to QueueOne
  this.queueOne.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  //if queueOne has length of 0 throw error
  if (this.queueOne.length === 0) {
    throw new Error("queueOne is empty!");
  }

  //dequeue from QueueOne except for one item, and push it into QueueTwo
  while (this.queueOne.length > 1) {
    this.queueTwo.push(this.queueOne.shift());
  }

  //get the last element to be returned
  let popped = this.queueOne.shift();

  //swap queueOne and queueTwo
  let temp = this.queueOne;
  this.queueOne = this.queueTwo;
  this.queueTwo = temp;

  return popped;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  //dequeue everything from queueOne into queueTwo, and store the last item that's shifted. Then swap queueOne & queueTwo's references again.

  let lastDeQueued = null;

  while (this.queueOne.length) {
    lastDeQueued = this.queueOne.shift();
    this.queueTwo.push(lastDeQueued);
  }

  //swap queueOne and queueTwo
  let temp = this.queueOne;
  this.queueOne = this.queueTwo;
  this.queueTwo = temp;


  return lastDeQueued;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queueOne.length===0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */