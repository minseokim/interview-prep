/*
Given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one. Find the missing number.
*/

/*
We can get the sum of the list by using n(n+1) / 2.
Once we get it, we simply subtract it from the list sum.
*/

const findMissingNumber = function(list) {
  let ceil = list.length+1;//if list is 5 elements, this means originally there are 6 elements. Since one is missing.
  const originalSum = Math.floor((ceil * (ceil+1))/2);

  let sum = 0;
  list.forEach(function(item) {
    sum += item;
  });

  return originalSum - sum;
};

const arr = [3,7,1,2,8,4,5];