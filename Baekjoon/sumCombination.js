/*
  Express integer n in sums of 1, 2, and 3.
  EX) 4
  1 + 1 + 1 + 1
  1 + 1 + 2
  1 + 2 + 1
  2 + 1 + 1
  2 + 2
  1 + 3
  3 + 1
*/

/*
We will consider all the following cases
For a subroutine go(count, sum, goal)

Case 1 ) Adding 1 : go(count+1, sum+1, goal)

Case 2 ) Adding 2 : go(count+2, sum+1, goal)

Case 3 ) Adding 3 : go(count+3, sum+1, goal)

*/

const sumCombinations = function(target) {
  const result = [];

  const go = function(sum, goal, list) {
    if (sum > goal) {
      return;
    }

    if (sum === goal) {
      result.push(list.slice());
      return;
    }

    for (let i = 1; i < target; i++) {
      list.push(i);
      go(sum+i, goal, list);
      list.pop();
    }

    return list;
  };

  go(0, target, []);
  return result;
};

console.log(sumCombinations(6));