"use strict";

function rockPaperScissorsPermutation(roundCount) {
  const hands = ["rock", "paper", "scissors"];
  let result = [];

  const generator = playedSoFar => {
    if (playedSoFar.length === roundCount) {
      result.push(playedSoFar.slice());
    } else {
      for (let i = 0; i < hands.length; i++) {
        let nextHand = hands[i];
        playedSoFar.push(nextHand);
        generator(playedSoFar);
        playedSoFar.pop();
      }
    }
  };

  generator([]);
  return result;
}

function rockPaperPermutation(rounds) {
  if (rounds === 0) {
    return [];
  } else if (rounds === 1) {
    return ["r", "p", "s"];
  } else {
    var previousResult = rockPaperPermutation(rounds - 1);
    return previousResult.reduce(function(accum, one) {
      return accum.concat([one + "r", one + "p", one + "s"]);
    }, []);
  }
}

console.log(rockPaperScissorsPermutation(2));
