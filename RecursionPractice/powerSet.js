//abc

const powerSet = function(str) {
  const result = [];

  const recurse = (soFar, startIndex) => {
    result.push(soFar.slice());

    for (let i = startIndex; i < str.length; i++) {
      let currentElem = str[i];
      soFar.push(currentElem);
      recurse(soFar, i + 1);
      soFar.pop();
    }
  };

  recurse([], 0);

  return result;
};

function binaryStrings(string) {
  const result = [];

  function generate(soFar, currentIndex) {
    if (currentIndex === string.length) {
      result.push(soFar.slice());
      return;
    }

    var currentElement = string[currentIndex];

    soFar.push(currentElement);
    generate(soFar, currentIndex + 1);
    soFar.pop();

    generate(soFar, currentIndex + 1);
  }

  generate([], 0);
  return result;
}

console.log(binaryStrings("abc"));
