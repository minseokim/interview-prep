'use strict';
const compose = function(){
  const args = Array.from(arguments);

  return (val) => {
    return args.reduceRight(function(acc, fn) {
      return fn(acc);
    }, val);
  };
};

//Alternate version that handles multiple arguments
const composeMultipleArgs = function(){
  const args = Array.from(arguments);

  return function() {
    let insideArgs = arguments;
    //initial call to first function will return a single value, not an array
    let updatedResult = args[args.length-1].apply(null, insideArgs);
    for (let i = args.length-2; i >= 0; i--) {
      updatedResult = args[i](updatedResult);
    }
    return updatedResult;
  };
};

const add2 = (num) => {return num + 2};
const multiplyBy3 = (num1, num2, num3) => {return num1 * num2 * num3};
console.log(composeMultipleArgs(add2, multiplyBy3)(5,3,4)); // 17