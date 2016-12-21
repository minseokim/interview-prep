'use strict';
const coins = [1,2,5,10,20,50,100,200];

//Naive solution
function coinSums (total) {
  let counter = 0;

  const helper = (sum, index) => {
    //we've looked at every coin
    if (sum === total) {
      counter++;
      return;
    }
    //the sum is larger than total amount(we've used up all coins)
    if (sum > total) {
      return;
    }

    //otherwise, iterate through all coins, and recursively call helper
    for (let i = index; i < coins.length; i++) {
      let nextCoin = coins[i];
      helper(sum + nextCoin, i);
    }
  };

  helper(0,0);
  return counter;
}


console.log(coinSums(5));