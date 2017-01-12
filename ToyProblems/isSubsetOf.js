'use strict';

//both arrays will contain only strings

Array.prototype.isSubsetOf = function(contextArray) {
  const largerSet = new Set();
  contextArray.forEach((item) => {
    largerSet.add(item);
  });

  console.log(largerSet);

  let currentElem;
  for (let i = 0; i < this.length; i++) {
    currentElem = this[i];
    if (largerSet.has(currentElem) === false) {
      return false;
    }
  }

  return true;
};

const myArray = ['cat', 'dog', 'cow'];
console.log(myArray.isSubsetOf(['dog', 'cow', 'fox'])); //false
// console.log(myArray.isSubsetOf(['cat', 'gorilla'])); //true
// console.log(myArray.isSubsetOf(['catfish'])); //false