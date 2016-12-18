'use strict';

function rockPaperScissorsPermutation (roundCount) {
  const hands = ["r", "p", "s"];
  let storage = [];

  const generator = (remainingCount, playedSoFar) => {

    if (remainingCount === 0) {
      storage.push(playedSoFar);
      return;
    }

    for (let i = 0; i < hands.length; i++) {
      let newWord = playedSoFar.concat(hands[i]);
      generator(remainingCount-1, newWord);
    }
  };

  generator(roundCount, "");
  return storage;
}