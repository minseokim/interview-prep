
// Given an array of ints, compute recursively if the array contains a 6.
//We'll use the convention of considering only the part of the array that begins
//at the given index. In this way, a recursive call can pass index+1 to move down the array.
// The initial call will pass in index as 0.

// array6([1, 6, 4], 0) → true
// array6([1, 4], 0) → false
// array6([6], 0) → true

const array6 = (arr, index) => {
  //if index reaches arr's length, return 0;
  index = index || 0;

  if (index === arr.length) {
    return false;
  }

  //check if current index is 6, if it is, add 1 and recursively call with following index
  //if not, just recursively call with following index

  if (arr[index] === 6) {
    return true;
  } else {
    return array6(arr, ++index);
  }
};

console.log(array6([1,6,4], 0));