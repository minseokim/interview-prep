/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
      //pop from inStack and push into outStack
      while (this.inStack.length !== 0) {
        this.outStack.push(this.inStack.pop());
      }
      //then pop the top of outStack(The oldest element)
      let oldest = this.outStack.pop();
      return oldest;
    } else {
      return this.outStack.pop();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
      let lastPopped = null;
      //pop from inStack and push into outStack
      while (this.inStack.length !== 0) {
        lastPopped = this.inStack.pop();
        this.outStack.push(lastPopped);
      }
      return lastPopped;
    } else {
      return this.outStack[this.outStack.length-1];
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return (this.inStack.length === 0 && this.outStack.length === 0)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */