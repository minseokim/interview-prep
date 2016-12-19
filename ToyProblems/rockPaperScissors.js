'use strict';

function rockPaperScissorsPermutation (roundCount) {
  const hands = ["r", "p", "s"];
  let storage = [];

  const generator = (playedSoFar) => {

    if (playedSoFar.length === roundCount) {
      storage.push(playedSoFar);
    } else {
      for (let i = 0; i < hands.length; i++) {
        let newWord = playedSoFar.concat(hands[i]);
        generator(newWord);
      }
    }
  };

  generator("");
  return storage;
}


function rockPaperPermutation (rounds) {
  if(rounds === 0 ){
    return [];
  } else if(rounds === 1){
    return ['r', 'p', 's'];
  } else{
    var previousResult = rockPaperPermutation(rounds-1);
    return previousResult.reduce(function(accum, one){
      return accum.concat([one+'r', one+'p', one+'s']);
    },[]);
  }
}

console.log(rockPaperScissorsPermutation(3));