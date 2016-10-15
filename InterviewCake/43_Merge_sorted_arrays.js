var myArray = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

function merge(arrayOne, arrayTwo) {
  var mergedArray = [];
  var i = 0;
  var j = 0;
  var currentIndex = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      mergedArray[currentIndex] = arrayOne[i];
      i++;
    } else {
      mergedArray[currentIndex] = arrayTwo[j];
      j++;
    }
    currentIndex++;
  }

  //Case 1 : There is stuff left over in arrayOne
  while (i < arrayOne.length) {
    mergedArray[currentIndex] = arrayOne[i];
    i++;
    currentIndex++;
  }

  //Case 2 : There is stuff left over in arrayTwo
  while (j < arrayTwo.length) {
    mergedArray[currentIndex] = arrayTwo[j];
    j++;
    currentIndex++;
  }
  return mergedArray;
}

console.log(merge2(myArray, alicesArray));

//Alternative Solution(Pre-refactor)
function merge2(myArray, alicesArray) {
  var mergedArray = [];
  var myIndex = 0;
  var mergedIndex = 0;
  var aliceIndex = 0;

  while (mergedIndex < (myArray.length + alicesArray.length)) {
    var myArrayExhausted = myIndex >= myArray.length;
    var aliceArrayExhausted = alicesArray >= alicesArray.length;

    //Case1 : next item is from myArray IF
    //myArray isn't exhausted AND
      //aliceArray is exhausted OR next item in myArray is smaller than next item in aliceArray
    if (!myArrayExhausted && (aliceArrayExhausted || (myArray[myIndex] < alicesArray[aliceIndex]))) {
      mergedArray[mergedIndex] = myArray[myIndex];
      myIndex++;
    }

    //Case2 : next item is from aliceArray
    else {
      mergedArray[mergedIndex] = alicesArray[aliceIndex];
      aliceIndex++;
    }

    mergedIndex++;
  }

  return mergedArray;
}
