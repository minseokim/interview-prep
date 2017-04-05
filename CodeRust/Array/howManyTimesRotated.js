/* Given a sorted, rotated array WITHOUT DUPLICATES find out how many times it was rotated */

//Find minimum element
//Index of min === # of rotations

//Improve on linear search
  //binary search :
    //Case 1 : a[low] <= a[high] : already sorted, return low
    //Case 2 : check if middle is 'pivot' then return mid
      //pivot's next and previous are greater than it(Unique property of pivot)
      //Need to use modulo to wrap around to find next element
    //Case 3 : Right half is sorted, search left half
    //Case 4 : First half is sorted, search right half

const findRotationTimes = function(arr) {
  let low = 0;
  let high = arr.length-1;

  while (low <= high) {
    let mid = Math.floor((low + high)/2);

    if (arr[low] <= arr[high]) return low;

    let next = (mid+1) % arr.length;
    let prev = (mid-1 + arr.length) % arr.length;
    //mid is pivot!
    if (arr[mid] < next && arr[mid] < prev) return mid;

    //pivot cannot exist in the left half, go right
    else if (arr[mid] > arr[low]) low = mid+1;

    //pivot cannot exist in the right half, go right.
    else if (arr[mid] < arr[high]) high = mid-1;
  }

  //improperly sorted array
  return -1;
};

const arr = [11, 12, 15, 18, 2, 5, 6, 8];