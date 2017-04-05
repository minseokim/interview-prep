/*
Search a given number in a sorted array that has been rotated by some arbitrary number. -1 if the # does not exist
*/

//KEY POINT : Rotated array means 1/2 of the array will always be sorted. So USE this point.


const searchRotatedArrayIter = function(arr, target) {
  let low = 0;
  let high = arr.length-1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    else if (arr[low] <= arr[high]) { //case 2 : right half is sorted

      //if target lies in this range
      if (target > arr[mid] && target <= arr[high]) {
        low = mid+1;
      } else {
        high = mid-1;
      }
    } else if (arr[low] <= arr[mid]) { //case 3 : left half is sorted

      if (arr[low] <= target && target < arr[mid]) {
        high = mid-1;
      } else {
        low = mid+1;
      }
    }
  }

  return -1;
};

//Modified Binary Search
const searchRotatedArray = function(arr, target, start, end) {
  start = start || 0;
  end = end || arr.length-1;

  let mid = Math.floor((start + end) / 2);

  //base case
  if (start > end) return -1;

  //If it's equal to mid return
  if (arr[mid] === target) return mid;

  //Case 2 : a[mid] <= A[high] and target is in right half, search right half
  else if (arr[mid] <= arr[end] && target > arr[mid] && target <= arr[end]) {
    return searchRotatedArray(arr, target, mid+1, end);
  }

  //Case 3 : A[low] <= A[mid] and target is in first half, search first half
  else if (arr[start] <= arr[mid] && target >= arr[start] && target < arr[mid]) {
    return searchRotatedArray(arr, target, start, mid-1);
  }

  else if (arr[start] > arr[mid]) {
    return searchRotatedArray(arr, target, start, mid-1);
  }

  else if (arr[mid] > arr[end]) {
    return searchRotatedArray(arr, target, mid+1, end);
  }
};

const arr = [5,6,7,8,1,2,3,4];
console.log(searchRotatedArrayIter(arr, 6));