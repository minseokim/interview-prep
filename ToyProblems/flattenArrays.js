'use strict';

var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]]; // [1,2,3,4,5,6,7,8,9]
var arr = [1,[2,[3,[4,[5]]]]]; //[1,2,3,4,5]
var arr2 = [1,[2,[3]]];
var nested = [3,[1,'hey',[2, 'you',[2,5]]],1,[9,[{},[2,true]]]]; //[ 3, 1, 'hey', 2, 'you', 2, 5, 1, 9, {}, 2, true ]

//recursive approach
const flatten = (arr, result) => {
  result = result || [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //DON'T return recursive call!
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

//iterative solution
const flattenIter = (arr) => {
  const copy = [];
  const result = [];
  Array.prototype.push.apply(copy, arr);

  while (copy.length) {
    let current = copy.pop();
    if (Array.isArray(current)) {
      //flatten and push back into the copy. Can use ES6 spread operator here as well
      copy.push.apply(copy, current);
    } else {
      result.push(current);
    }
  }
  return result;
};

console.log(flattenIter(arr));