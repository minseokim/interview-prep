'use strict';

var bind = function(func, context){
  let originalArgs = [].slice.call(arguments, 2);

  return function() {
    let args = [].slice.call(arguments);
    let finalArgs = originalArgs.concat(args);
    return func.apply(context, finalArgs);
  };
};

Function.prototype.bind = function(context) {
  let originalArgs = [].slice.call(arguments, 1);
  let self = this;

  return function() {
    let newArgs = originalArgs.concat([].slice.call(arguments));
    return self.apply(context, newArgs);
  }
}

var func = function(arg1){ return arg1 };
var context = null;
var boundFunc = func.bind(context, "foobar");
var result = boundFunc();
console.log(result);