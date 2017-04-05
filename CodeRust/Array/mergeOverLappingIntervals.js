/*
Given an array (list) of intervals as input where each interval has a start and end timestamps. Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list).

Consider below input array. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so should be merged to one big interval (1, 8). Similarly intervals (10, 12) and (11, 15) are also overlapping intervals and should be merged to (10, 15).
*/

const mergeOverLapping = function(list) {

  if (list.length <= 0) {
    return [];
  }
  //sort by start times first.
  let sortedList = list.sort(function(a, b) {
    return a[0] - b[0];
  });

  const result = [];

  result.push(sortedList[0]);

  for (let i = 1; i < sortedList.length; i++) {
    let currentTime = sortedList[i];
    let lastMergedTime = result[result.length-1];

    //Case 1 : End time of merged time is greater than start Time of current Time
    if (lastMergedTime[1] > currentTime[0]) {
      //End time becomes the maximum of lastMergedTime's end time and currentTime's end time.
      lastMergedTime[1] = Math.max(lastMergedTime[1], currentTime[1]);
    } else {
      result.push(currentTime);
    }
  }

  return result;
};

const arr = [[1,5], [3,7], [4,6], [6,8], [10, 12], [11, 15]];
console.log(mergeOverLapping(arr)); //[[1,8], [10, 15]];
