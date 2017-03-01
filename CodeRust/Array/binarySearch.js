//recursive solution
const binarySearchRec = function(arr, target, start, end) {
  start = start || 0;
  end = end || arr.length-1;
  //recompute mid
  let mid = Math.floor((start+end)/2);

  //base case
  if (start > end) {
    return -1;
  }

  //case 1 : check if target exists at the mid index, if yes return mid
  if (arr[mid] === target) {
    return mid;
  }
  //case 2 : element at mid is less than target, search right half
  else if (arr[mid] < target) {
    return binarySearchRec(arr, target, mid+1, end);
  }

  //case 3 : element at mid is greater, search left half
  else {
    return binarySearchRec(arr, target, start, mid-1);
  }
};


//iterative solution
const binarySearch = function(arr, target) {
  let start = 0;
  let end = arr.length-1;
  let mid;

  //while loop as long as start <= end
  while (start <= end) {
    //recompute mid at every iteration
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    //search right half
    else if (arr[mid] < target) {
      start = mid+1;
    }

    else {
      end = mid-1;
    }
  }

  return -1;
};

//test Cases
const arr = [1,3,5,7,9,11];
const arr2 = [2,4,6,8,10,12];

console.log(binarySearch(arr, 9)); //4
console.log(binarySearch(arr, 8)); //-1
console.log(binarySearch(arr2, 4)); //1
console.log(binarySearch(arr2, 7)); //-1;