function binarySearchRecurse(array, target) {
  var middle;
  var search = function(array, start, end) {
    if (start > end) {
      return -1;
    }
    middle = Math.floor((start + end)/2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      return search(array, middle+1, end);
    } else {
      return search(array, start, middle-1);
    }
  }
  return search(array, 0, array.length-1);
}


function binarySearchIterative(array, target) {
  var start = 0;
  var end = array.length-1;
  var mid = Math.floor((start + end) / 2);

  while (start <= end) {

    mid = Math.floor((start + end) / 2);

    console.log('start : ', start);
    console.log('end :', end);
    console.log('mid :', mid);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid-1;
    } else {
      start = mid+1;
    }
  }
  return -1;
}
console.log(binarySearchRecurse([1,2,3,4,5], 2));
console.log(binarySearchIterative([1,2,3,4,5], 2));