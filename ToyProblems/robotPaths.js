'use strict';
function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner.
The robot can move either up, down, left, or right, but cannot visit the same spot twice.
How many possible unique paths are there to the bottom right corner?
Make your solution work for a grid of any size.
*/

//total path# = path# going up + path# going down + path# going left + path# going right
function robotPaths (n, board, i, j) {
  // console.log('n :', n);
  // console.log('board: ', board);
  // console.log('i :', i);
  // console.log('j :', j);

  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  //invalid path, or path has been visited, return 0;
  if (!(i >= 0 && i < n && j >= 0 && j < n) || board.hasBeenVisited(i,j)) {
    return 0;
  }

  //we've reached corner
  if (j === n-1 && i === n-1) {
    return 1;
  }

  board.togglePiece(i, j);
  let result = robotPaths(n, board, i, j+1) +
                robotPaths(n, board, i+1, j) +
                  robotPaths(n, board, i-1, j) +
                    robotPaths(n, board, i, j-1);

  board.togglePiece(i,j);
  return result;
}

console.log(robotPaths(3));
