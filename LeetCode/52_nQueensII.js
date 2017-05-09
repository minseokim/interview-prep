// Follow up for N-Queens problem.

// Now, instead outputting board configurations, return the total number of distinct solutions.

/**
 * @param {number} n
 * @return {number}
 */


const swap = function(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const isValid = function(columnsPerRow, index) {
  //we know since we've swapped #'s there can't be duplicate numbers, meaning we've already checked for same row. Since every index is a different column, we've checked for column too. All we have to do is check for ascending/descending diagonals

  for (let i = 0; i < index; i++) {
    // console.log('index :', index);
    // console.log('i :', i);
    // console.log('rPC :', columnsPerRow);
    // console.log('columnsPerRow[index] :', columnsPerRow[index]);
    // console.log('columnsPerRow[i] + (i + index) :', columnsPerRow[i] + (i + index));
    // console.log('columnsPerRow[i] + (i - index) :', columnsPerRow[i] + (i - index))
    // console.log('---------------------------');

    let diagonalOffset = Math.abs(index - i);

    if (columnsPerRow[index] === columnsPerRow[i] + diagonalOffset ||
        columnsPerRow[index] === columnsPerRow[i] - diagonalOffset) {
      return false;
    }
  }
  return true;
}

//check every possible combination of queens per row,
//and print the output.  j represents the current column.

const totalNQueens = function(n) {
  const columnsPerRow = new Array(n);
  let solutionCount = 0;

  for (let i = 0; i < n; i++) {
    columnsPerRow[i] = i;
  }


  const nQueenSolver = function(columnsPerRow, index) {
    if (index === columnsPerRow.length) {
      solutionCount++;
      return;
    }

    //iterate over all remaining options, fix one and swap
    for (let i = index; i < columnsPerRow.length; i++) {
      swap(columnsPerRow, i, index);

      if (isValid(columnsPerRow, index)) {
        nQueenSolver(columnsPerRow, index+1);
      }

      swap(columnsPerRow, index, i);
    }
  };

  nQueenSolver(columnsPerRow, 0, solutionCount);

  return solutionCount;
};

console.log(totalNQueens(4));