/*Implement a method to print all permutations of a given string.

Implement a method to print all permutations of a given string. For instance, all permutations of string "bad" are:

*/

/*
For our recursive function, we'll have two parameters, USED parameter to denote all letters used so far, and REMAINING to denote all letters left to use.

For ex ) if used = 'a', and remaining = 'bc' then we know that we still have to use the remaining letters.

So our base case will be if we've used up all letters, or there are no remaining letters left, in which case we'll just push to result.

Otherwise, we need to do three things :
1. choose a new character from the remaining letters list and use it.
2. Since we've used that character up, take it out from the remaining list.
3. Call the function recursively with the new used/remaining values.

Key here is that in each recursive function, we need to iterate over the remaining letters since we want to use all of them.

*/

const permuteString = function(string) {
  const result = [];

  const generate = function(used, remaining) {
    if (used.length === string.length || remaining.length === 0) {
      result.push(used);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        let newCharToUse = used + remaining[i];
        let newRemaining = remaining.slice(0, i) + remaining.slice(i+1);
        generate(newCharToUse, newRemaining);
      }
    }
  };
  generate('', string);

  return result;
};

console.log(permuteString('abc'));