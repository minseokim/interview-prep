'use strict';
const evenOccurence = (arr) => {
  //use Map to preserve order, go through array and keep count
  const storage = new Map();

  arr.forEach((item) => {
    if (storage.has(item)) {
      storage.set(item, storage.get(item)+1);
    } else {
      storage.set(item, 1);
    }
  });

  for (let key of storage) {
    if (key[1] % 2 === 0) {
      return key[0];
    }
  }

  return null;
};

console.log(evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]));
console.log(evenOccurence([ "cat", "dog", "dig", "cat" ]));
