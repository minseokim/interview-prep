
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


//Soution #1. Handles duplicates! Extra space complexity O(n) because we use a map to keep character count.
const permuteUnique = function(nums) {

  //generate a map with element : count
  const countMap = {};
  nums.forEach(function(elem) {
    if (!countMap[elem]) {
      countMap[elem] = 1;
    } else {
      countMap[elem] += 1;
    }
  });

  const elements = [];
  const count = [];
  let index = 0;

  for (let elem in countMap) {
    elements.push(elem);
    count.push(countMap[elem]);
  }

  const result = [];

  //Recursive algorithm, we go from left to right looking for the next available character(IF remaining count is not 0). Then we push the character into result list. We used this character so we update the characterCount. We use level to keep track of the depth of the recursion.

  const generate = function(currentLevel, generated) {
    if (currentLevel === nums.length) {
      result.push(generated.slice());
      return;
    }
    //look for the next available character. We iterate only up to the number of distinct elements' length...THIS IS KEY.

    for (let i = 0; i < elements.length; i++) {
      let currentChar = elements[i];
      if (count[i] === 0) {
        continue;
      }
      //add current character to generated
      generated[currentLevel] = currentChar;
      //decrement characterCount
      count[i] -= 1;
      //Enter next recursive call
      generate(currentLevel+1, generated);
      //Put character Count back
      count[i] += 1;
    }

  };
  generate(0, []);
  return result;
};




 //Solution #2. Swaps but with checking duplicates...slightly more complicated
const swap = function(list, a, b) {
    // console.log('a :', a, 'b :', b);
    // console.log('swapping : ', list[a], 'AND', list[b]);
    // console.log('------------------------------');
    let temp = list[a];
    list[a] = list[b];
    list[b] = temp;
    return list;
};

const sameExist = function(list, start, end) {
  //checks to see if there exist any number between start index and end index that are equal to list[end]
  for (let i = start; i < end; i++) {
    if (list[i] === list[end]) {
      return true;
    }
  }
  return false;
};

var permuteUniqueTwo = function(nums) {
    const result = [];
    const storage = new Set();

    const generate = function(startIndex, input) {

        if (startIndex === input.length) {
            result.push(input.slice());
            return;
        }
        //fix one letter, swap i with currentIndex
        for (let i = startIndex; i < input.length; i++) {
            //Handle duplicates
            if (sameExist(input, startIndex, i)) {
              continue;
            }
            swap(input, startIndex, i);
            generate(startIndex+1, input);
            swap(input, startIndex, i);
        }
    };


    generate(0, nums);

    return result;
};

// console.log(permuteUnique(["A", "A","B", "B"]));
console.log(permuteMe(["A", "B", "C"]));