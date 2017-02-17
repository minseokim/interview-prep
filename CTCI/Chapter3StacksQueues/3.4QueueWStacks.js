/*
Implement a MyQueue class which implements a queue using two stacks
*/

/*Stack Class*/
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
InStack & OutStack
Push : Just push to InStack
Pop : Case 1) OutStack is empty - move everything from instack to oustack and then Pop
    Case 2)Oustack is not empty, just pop from Oustack
    - Amortized analysis of runtime**
*/
