function characterFrequency (string) {
  var characterCount = new Map();
  var result = [];
  var currentCount;

  for (var i = 0; i < string.length; i++) {
    if (characterCount.get(string[i])) {
      characterCount.set(string[i], characterCount.get(string[i])+1);
    } else {
      characterCount.set(string[i], 1);
    }
  }

  characterCount.forEach(function(freq, char) {
    result.push([char, freq]);
  });

  //Sort by descending freq, then ascending character
  result.sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]){
      return -1;
    }
  });

  return result;
}

//Alternative Solution : Sort it by character descending order, then use insertion sort(stable) to sort it
//by ascending character

console.log(characterFrequency("javascript"));