var swap = function(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

var bubbleSort = function(array) {
  var swapped;

  //If length is n, we only have to sort it n-1 times
  for (var i = 0; i < array.length-1; i++) {
    //Reset swapped flag to false before each pass through the array
    swapped = false;
    //Every time we sort, we don't have to check the last ones since the largest
    //element will have bubbled to the end
    for (var j = 0; j < array.length-1-i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
        swapped = true;
      }
    }

    if (!swapped) {
      return array;
    }
  }
  return array;
};

console.log(bubbleSort([0,5,2,1,4]));