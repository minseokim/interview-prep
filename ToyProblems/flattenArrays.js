var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]]; // [1,2,3,4,5,6,7,8,9]
var arr = [1,[2,[3,[4,[5]]]]]; //[1,2,3,4,5]
var nested = [3,[1,'hey',[2, 'you',[2,5]]],1,[9,[{},[2,true]]]]; //[ 3, 1, 'hey', 2, 'you', 2, 5, 1, 9, {}, 2, true ]

//recursive approach
var flatten = function(arr) {
  var result = [];

  if (arr.length === 1) {
    return arr;
  }

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

//recursive approach that resuses array instead of creating a new copy at every call
var flattenTwo = (arr,result) => {
  result = result || []

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenTwo(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

//Iteration that uses spread operator
var flattenIter = (arr) => {
  var queue = arr.slice();
  var result = [];

  while (queue.length) {
    var current = queue.pop();
    if (Array.isArray(current)) {
      queue.push(...current);
    } else {
      result.push(current);
    }
  }
  return result;
};

console.log(flatten(nested));
