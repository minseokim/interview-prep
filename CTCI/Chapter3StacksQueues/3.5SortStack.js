/*
Write a program to sort a stack such that the smallest items are on top. Additional temporary stack is allowd, but can't copy the elements into any other data structure. The stack supports push, pop, peek, isEmpty
*/

/*Stack Implementation*/
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

/*
Algorithm that runs in O(N^2) time and O(N) space :
*/
Stack.prototype.sort = function(stack1) {
  const sortedStack = new Stack();
  //we're essentially moving everything from stack1 to sortedStack
  while (!stack1.isEmpty()) {
    let temp = stack1.pop();

    while (!sortedStack.isEmpty() && temp < sortedStack.peek()) {
      stack1.push(sortedStack.pop());
    }

    sortedStack.push(temp);
  }
  return sortedStack;
}
