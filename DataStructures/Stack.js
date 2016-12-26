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

const myStack = new Stack();
//stack should be empty and size 0
console.log(myStack.size() === 0);
console.log(myStack.isEmpty() === true);
//push new item to stack
myStack.push(1);
myStack.push(2);
myStack.push('c');
console.log(myStack.peek() === 'c');
console.log(myStack.pop() === 'c');
console.log(myStack.peek() === 2);
myStack.pop();
console.log(myStack.peek() === 1);