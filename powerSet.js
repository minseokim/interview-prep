//Powerset.js

var powerSet = function(string) {
  //parse out duplicates and sort the string

  var charStor = {};
  for (var i = 0; i < string.length; i++) {
    charStor[string[i]] = true;
  }

  var uniq = [];

  for (var char in charStor) {
    uniq.push(char);
  }

  uniq = uniq.sort();

  var result = [];
  var length = uniq.length;

  var subroutine = function(letters, currentCharIndex) {
    result.push(letters);

    while (currentCharIndex < length) {
      subroutine(letters + uniq[currentCharIndex], ++currentCharIndex);
    }
  }

  subroutine('', 0);

  return result;
};

console.log(powerSet('horse'));