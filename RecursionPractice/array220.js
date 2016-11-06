// Given an array of ints, compute recursively if the array contains somewhere a value
//followed in the array by that value times 10. We'll use the convention of considering
//only the part of the array that begins at the given index. In this way, a recursive call
//can pass index+1 to move down the array. The initial call will pass in index as 0.

// array220([1, 2, 20], 0) → true
// array220([3, 30], 0) → true
// array220([3], 0) → false

const array220 = (arr, index) => {
  index = index || 0;

  if (arr.length === index) {
    return false;
  }

  if (arr[index+1] === (10 * arr[index])) {
    return true;
  } else {
    return array220(arr, index+1);
  }
};

console.log(array220([3,30],1));