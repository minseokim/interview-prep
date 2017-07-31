/*
Implement max queue
enqueue
dequeue
peek
size

max() -> returns the maximum value in the queue at this moment
*/

//1, 3, 7
// 7

/*
e 5
max -> 5
e 1
max -> 5
e 3

5 4 3 7
queue ->     5 4 3 7
dequeue ->   7
*/


function MaxQueue() {
    this.queue = [];
    this.dequeue = [];
}

MaxQueue.prototype.enqueue = function(item) {
  this.queue.push(item);

  while (this.dequeue.length && this.dequeue[this.dequeue.length-1] < item) {
      this.dequeue.pop();
  }
  this.dequeue.push(item);
};

MaxQueue.prototype.dequeue = function(item) {
   let dequeing = this.queue.shift();
   if (dequeing === this.dequeue[0]) {
       this.dequeue.shift();
   }
   return dequeing;
};

MaxQueue.prototype.max = function(item) {

};

MaxQueue.prototype.peek = function(item) {

};

MaxQueue.prototype.size = function(item) {
  return this.queue.length;
};
