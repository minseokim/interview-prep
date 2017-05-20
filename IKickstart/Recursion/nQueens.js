// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

const validate = function(board, row, col) {
  console.log('row :', row);
  console.log('col :', col);

  for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < col; j++) {

      if (board[i][j] === 'Q' &&
          ((Math.abs(row - col) === Math.abs(i - j)) ||
            (row + col === i + j) ||
              (row === i))) {

        console.log('i :', i);
        console.log('j :', j);
        console.log('return false');
        console.log('----------------');
        return false;
      }
    }
  }
  return true;
}

const nQueenSolve = function(n) {
  //generate board
  const board = new Array(n);

  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(n);
    board[i].fill('.');
  }

  const solutions = [];
  dfs(board, 0, solutions);
  return solutions;
};

const dfs = function(board, colIndex, result) {

  if (colIndex === board.length) {
    console.log(board);
    result.push(board.slice());
    return;
  }

  for (let row = 0; row < board.length; row++) {

    if (validate(board, row, colIndex)) {
      board[row][colIndex] = 'Q';
      dfs(board, colIndex+1, result);
      board[row][colIndex] = '.';
    }

  }
}


console.log(nQueenSolve(2));