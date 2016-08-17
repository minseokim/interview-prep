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
    if (!this.items.length) return null;

    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) return null;
    return this.items[this.items.length -1];
};



//MaxStack
function MaxStack() {
    this.stack = new Stack();
    this.maxStack = new Stack();
}

MaxStack.prototype.push = function(item) {
    this.stack.push(item);

    //Add a new item to the top of our stack. If the item is greater than or equal to the last item in maxStack, it's the new Max. So let's store it.
    if (!this.maxStack.peek() || item >= this.maxStack.peek()) {
        this.maxStack.push(item);
    }
    return item;
};

MaxStack.prototype.pop = function() {
    //remove and return the top item from our stack.
    let item = this.stack.pop();

    if (item === this.maxStack.peek()) {
        this.maxStack.pop();
    }


    return item;
}

MaxStack.prototype.getMax = function() {
    return this.maxStack.peek();
}