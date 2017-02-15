/*
Given string, write a function to check if its a permutation of a palindrome
*/

/*
Q's to ask : Is my input just going to be alphabet characters?
Does uppercase/lowercase matter?
If so, our dataset is restricted to 26 letters of the alphabet

Definition of a palindrome : all characters have even counts, or only one character has an odd count(Even length : 0, Odd length : 1)

Use hash table to store character counts : if character count is 0, make it 1. If we're adding a character and it's 1, decrement it so it's 0. So in the end we should have all 0's(and possibly one 1).

Loop through hash table get count of all characters, return count <= 1(Since it can only be 0 or 1)
O(n) with O(n) space, with two loops
------------

/*
Alternate solution : Check the character count AS we fill up the hash table. Have a counter and keep track of it in the same loop
*/

/*
Slightly optimized solution : Use bit vectors - since we don't need to know the actual count, we just keep track of whether it on/off.
In the end, just check if the bit vector is a 0 or a 1.
1. To check if it's 0 : compare the integer with 0
2. To check that if it's 1 : Subtract 1 from the number and then & it with the original ====> 0
*/

const palindromePermutation = function(string) {
    string = string.toLowerCase();
    let bitVector = new Array(26).fill(0);

    let currentCharCode;

    for (let i = 0; i < string.length; i++) {
      currentCharCode = string.charCodeAt(i)-97;
      // console.log(currentCharCode);
      if (bitVector[currentCharCode] === 0) {
        bitVector[currentCharCode]++;
      } else if (bitVector[currentCharCode] === 1) {
        bitVector[currentCharCode]--;
      }
    }

    bitVector = bitVector.join('');
    // console.log(bitVector);

    //check if it's either 0 or 1
    if ((string.length % 2) === 0) {
      console.log('even');
      return (Number.parseInt(bitVector, 2) === 0);
    } else {
      console.log('odd');
    // let num = Number.parseInt(bitVector, 2);
    // console.log(num);
      return ((num & (num - 1)) === 0);
    }
};
