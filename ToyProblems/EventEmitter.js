
// emitter = new Emitter
// sub = emitter.subscribe(‘eventName’, callback);
// sub2 = emitter.subscribe('eventName', callback2);
// emitter.emit(eventName, a, b, c);
// sub.release();
'use strict';

const Emitter = function() {
  this.eventStorage = {};
};

Emitter.prototype.subscribe = function(eventName, callback) {
  if (!this.eventStorage[eventName]) {
    this.eventStorage[eventName] = new Set();
  }
  this.eventStorage[eventName].add(callback);
  let self = this;
  return {
    release : function() {
      self.eventStorage[eventName].delete(callback);
    }
  }
};

Emitter.prototype.emit = function(eventName) {
  let args = Array.prototype.slice.call(arguments, 1);
  let callbacks = this.eventStorage[eventName];
  callbacks.forEach(function(fn) {
    fn.apply(null, args);
  });
};

const emitter = new Emitter();
let sub = emitter.subscribe('log', function(args) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
});

emitter.emit('log', 'a','b','c');
sub.release();
emitter.emit('log', 'test');