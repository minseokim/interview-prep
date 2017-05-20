/*
Given an n*m grid, find the best path to go from top-left corner to
bottom-right corner. You can ONLY go right, or down.
*/

const bestPath = function(board, n, m) {

  const bestPathRecurse = function(i, j) {
    //we've reached the base case if we're at the bottom right cell
    if (i === n-1 && j === m-1) {
      return board[i][j];
    }
    //we've reached the rightmost cell, we can only go down
    else if (i === n-1) {
      //don't forget to add the number at the current cell
      return board[i][j] + bestPath(i, j+1);
    }

    else if (j === m-1) {
      return board[i][j] + bestPath(i+1, j);
    }

    let down = bestPath(i+1, j);
    let right = bestPath(i, j+1);
    return Math.max(down, right);
  }

  return bestPathRecurse(0, 0);
};

console.log(bestPath(2,3));