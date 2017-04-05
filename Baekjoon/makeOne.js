/*We're trying to make 1 by applying one of three operations to an integer N :
  1. If it's divisible by 3, divide by 3
  2. If it's divisible by 2, divide by 2
  3. Subtract by 1

Find the smallest possible operations you can make to make N 1

*/

//First approach
//Dividing by 3 as much as possible since it'll shrink the number AMAP
//Same goes for dividing by 2
//DOESN'T WORK :
//For 10, subtracting it by 1 then dividing it by 3 three times ==> 4
//vs. dividing it by 2, then subtracting 1, then dividing by 2 twice. ===> 5


/*
First start by defining d[n]. d[n] is the minimum # of operations needed to reduce n into 1.

N ---> .... .... ----> 1

N ---> N/3  -------> 1

#1. D[n] = D[n/3] + 1

N ---> N/2 --------> 1

#2. D[n] = D[n/2] + 1

#3. D[n] = D[n-1] + 1

There's three ways to make D[n] as displayed above. So D[n] becomes the min(#1, #2, #3).
*/


const makeOne = function(n) {
  const memo = {};

  const go = (n) => {
    //if n is 1, no need for any computation to make 1 a 1. So return 0
    if (n === 1) return 0;
    //if it's already been saved in memo just return it from  memo
    if (memo[n] > 0) return memo[n];

    //Case 1 : Subtracting by 1.
    memo[n] = go(n-1) + 1;

    if (n % 3 === 0) {
      let temp = go(n/3) + 1;
      //if temp is smaller than what's already saved in memo, it's the new minimum
      if (memo[n] > temp) memo[n] = temp;
    }

    if (n % 2 === 0) {
      let temp = go(n/2) + 1;
      if (memo[n] > temp) memo[n] = temp;
    }

    return memo[n];
  };

  return go(n);
};


const makeOneBottomUp = function(n) {
  const memo = {};
  memo[1] = 0;
  for (let i = 2; i <= n; i++) {
    //case 1
    memo[i] = memo[i-1] + 1;

    if (i % 2 ===0) {
      let temp = memo[i/2] + 1;
      if (memo[i] > temp) {
        memo[i] = temp;
      }
    }

    if (i % 3 ===0) {
      let temp = memo[i/3] + 1;
      if (memo[i] > temp) {
        memo[i] = temp;
      }
    }
  }

  return memo[n];
};

console.log(makeOneBottomUp(10));