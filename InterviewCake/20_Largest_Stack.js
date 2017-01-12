function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {
    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

// Use your Stack class to implement a new class MaxStack with a function getMax() that returns the largest element in the stack. getMax() should not remove the item.

// Your stacks will contain only integers.

function MaxStack() {
    this.stack = new Stack();
    this.maxStack = new Stack();
}


MaxStack.prototype.push = function(item) {
    this.stack.push(item);
    //if the item is greater or equal to the last item in maxStack, it's a new max!
    if (!this.maxStack.peek() || item >= this.maxStack.peek()) {
        this.maxStack.push(item);
    }
    return item;
}

MaxStack.prototype.pop = function() {
    const item = this.stack.pop();

    if (item === this.maxStack.peek()) {
        this.maxStack.pop();
    }
    return item;
}