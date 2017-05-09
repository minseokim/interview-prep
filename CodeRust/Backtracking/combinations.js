/* Given two integers n and k, return all possible combinations of k numbers out of 1 2 3 ... n.

Make sure the combinations are sorted.

To elaborate,
1. Within every entry, elements should be sorted. [1, 4] is a valid entry while [4, 1] is not.
2. Entries should be sorted within themselves.

Example :
If n = 4 and k = 2, a solution is:

[
  [1,2],
  [1,3],
  [1,4],
  [2,3],
  [2,4],
  [3,4],
]
*/



module.exports = {
  //param A : integer
  //param B : integer
  //return a array of array of integers
  combine : function(A, B){

  }
};

const combinationsTwo = function(A, B) {
  const result = [];
  //first generate list
  const list = [];
  for (let i = 1; i <= A; i++) {
    list.push(i);
  }


  const recurse = function(index, soFar) {
    console.log('index :', index);
    console.log('soFar :', soFar);
    console.log('----------------------');

    if (soFar.length === B) {
      result.push(soFar.slice());
      return;
    }

    if (index === list.length) {
      return;
    }

    let currentElem = list[index];

    soFar.push(currentElem);
    recurse(index+1, soFar);
    soFar.pop();
    recurse(index+1, soFar);
  }

  recurse(0, []);

  return result;
};



const combinations = function(A, B) {
  const result = [];
  //first generate list
  const list = [];
  for (let i = 1; i <= A; i++) {
    list.push(i);
  }


  const recurse = function(index, soFar) {
    console.log('index :', index);
    console.log('soFar :', soFar);
    console.log('----------------------');

    if (index === B) {
      result.push(soFar.slice());
      return;
    }

    if (index === list.length) {
      return;
    }

    for (let i = index; i < list.length; i++) {
      let currentElem = list[i];
      soFar.push(currentElem);
      recurse(index+1, soFar);
      soFar.pop();
    }
  }

  recurse(0, []);

  return result;
};


console.log(combinationsTwo(4, 2));