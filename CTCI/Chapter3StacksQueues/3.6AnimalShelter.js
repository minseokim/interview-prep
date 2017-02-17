/*
Implement an animal shelter on a FIFO basis - with cats and dogs. Create data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. Use Linked List data structure.
*/

/*Animal Superclass*/
function Animal(name) {
    this._order = 0;
    this.name = name || "";
}

Animal.prototype.setOrder = function(order) {
  this._order = order;
};

Animal.prototype.getOrder = function() {
  return this._order;
}

Animal.prototype.isOlderThan = function(animal) {
    return this._order < animal.getOrder();
};

/*Cat and Dog Subclass*/
function Dog(){
  Animal.call(this);
}

function Cat(){
  Animal.call(this);
}


function AnimalQueue() {
  this.dogs = new LinkedList();
  this.cats = new LinkedList();
  this.order = 0;
}

AnimalQueue.prototype.enqueue = function(animal) {
  //set current order on new animal as a 'timestamp'
  animal.setOrder(this._order);
  //increment order
  this._order++;


};

AnimalQueue.prototype.dequeueAny = function() {

};

AnimalQueue.prototype.dequeueDogs = function() {

};

AnimalQueue.prototype.dequeueCats = function() {

};
