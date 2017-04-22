/* Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays. */

const findSmallestCommonNum = function(a, b, c) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    console.log(a[i], b[j], c[k]);
    //We've found the number
    if (a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }

    //Find the smallest value
    if (a[i] <= b[j] && a[i] <= c[k]) {
      i++;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      j++;
    } else if (c[k] <= a[i] && c[k] <= b[j]) {
      k++;
    }
  }

  return -1;
};

console.log(findSmallestCommonNum([6,7,10,25], [-1,4,5,6,7], [1,6,10,14]));