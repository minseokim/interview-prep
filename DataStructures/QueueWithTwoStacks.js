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


/*Queue Built With Two Stacks*/
function QueueWithTwoStacks() {
  this.forwardStack = new Stack();
  this.reverseStack = new Stack();
  this._size = this.forwardStack.size() + this.reverseStack.size();
}

QueueWithTwoStacks.prototype.size = function() {
  return this._size;
};

QueueWithTwoStacks.prototype.enqueue = function(item) {
  // //Case 1. if forward stack is empty, move everything to forward stack and enqueue
  // if (this.forwardStack.isEmpty()) {
  //   while (!reverseStack.isEmpty()) {
  //     forwardStack.push(reverseStack.pop());
  //   }
  // }

  this.forwardStack.push(item);
};

QueueWithTwoStacks.prototype.dequeue = function() {
  //if reverse stack is empty, move everything to reverse stack and pop
  if (this.reverseStack.isEmpty()) {
    while (!forwardStack.isEmpty()) {
      reverseStack.push(forwardStack.pop());
    }
  }
  const firstItem = this.reverseStack.pop();
  return firstItem;
};

QueueWithTwoStacks.prototype.peek = function() {
  //if reverse stack is empty, move everything to reverse stack and pop
  if (this.reverseStack.isEmpty()) {
    while (!this.forwardStack.isEmpty()) {
      this.reverseStack.push(this.forwardStack.pop());
    }
  }
  const firstItem = this.reverseStack.peek();
  return firstItem;
};

QueueWithTwoStacks.prototype.isEmpty = function() {
  return (this.forwardStack.isEmpty() && this.reverseStack.isEmpty());
};


const myStack = new QueueWithTwoStacks();
//stack should be empty and size 0
console.log(myStack.size() === 0);
console.log(myStack.isEmpty() === true);
//push new item to stack
myStack.enqueue(1);
myStack.enqueue(2);
myStack.enqueue('c');
console.log(myStack);
console.log(myStack.peek() === 1);
console.log(myStack.dequeue() === 1);
console.log(myStack.peek() === 2);
console.log(myStack.dequeue() === 2);
console.log(myStack.peek() === 'c');