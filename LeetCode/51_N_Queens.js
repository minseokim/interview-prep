// Given a chess board of size N x N, determine how many ways N queens can be placed on this board so that no two queens attack each other.

/*
Every correct solution will be a permutation
 [1, 3, 0, 2]
 This means queen is in 1st row in 1st column, 3rd row in 2nd column, 0th row in 3rd column, 2nd row in 4th column.

Instead of using the entire board, since we know that there can only be one queen in one column, we change our representation to be a 1-D Array. 'row for column'. As in, each index represents column #, and each entry represents row # at that column.

Since for this case, if we look at the output, it's easier to think of the representation as 'Columns For Every Row' because for every row we're inserting a Q at each column

It's easy to go from [1, 3, 0, 2] to this :

[".Q..",
 "...Q",
 "Q...",
 "..Q."]


[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

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

    let diagonalOffset = Math.abs(index - i);

    if (columnsPerRow[index] === columnsPerRow[i] + diagonalOffset ||
        columnsPerRow[index] === columnsPerRow[i] - diagonalOffset) {
      return false;
    }
  }
  return true;
}

const generateBoard = function(columnsPerRow) {
// It's easy to go from [1, 3, 0, 2] to this :

// [".Q..",
//  "...Q",
//  "Q...",
//  "..Q."]
  const board = [];
  let emptyRow = new Array(columnsPerRow.length);
  emptyRow.fill(".");
  //first iterate over board length so we can generate N rows
    //then check every columnPerRow to find out which index the Queen is placed at every row
    //we place the Queen at the proper column index, then push the row into board.

  for (let currentRow = 0; currentRow < columnsPerRow.length; currentRow++) {
    let columnIndex = columnsPerRow[currentRow];
    emptyRow[columnIndex] = "Q";
    board.push(emptyRow.join(''));
    emptyRow[columnIndex] = ".";
  }
  return board;
}

//check every possible combination of queens per row,
//and print the output.  j represents the current column.

const nQueenSolver = function(columnsPerRow, index, result) {
  if (index === columnsPerRow.length) {
    let board = generateBoard(columnsPerRow.slice());
    result.push(board);
    return;
  }

  //iterate over all remaining options, fix one and swap
  for (let i = index; i < columnsPerRow.length; i++) {
    swap(columnsPerRow, i, index);

    if (isValid(columnsPerRow, index)) {
      nQueenSolver(columnsPerRow, index+1, result);
    }

    swap(columnsPerRow, index, i);
  }
};

const nQueens = function(n) {
  const columnsPerRow = new Array(n);
  const result = [];

  for (let i = 0; i < n; i++) {
    columnsPerRow[i] = i;
  }

  nQueenSolver(columnsPerRow, 0, result);

  return result;
};

console.log(nQueens(4));
// console.log(generateBoard([1,3,0,2]));