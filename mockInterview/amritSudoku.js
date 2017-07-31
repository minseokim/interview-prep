const validate = function(board, row, column) {
    const options = [1,2,3,4,5,6,7,8,9];
    const chosen = new Array(10);
    chosen.fill(false);

    //validate current row
    for (let i = 0; i < board.length; i++) {
        if (chosen[board[i][column]]) {
            return false;
        } else {
            chosen[board[i][column]] = true;
        }
    }
    //validate current column

    //validate current sub-square
};


const sudokuSolver = function(board) {
    let options = [1,2,3,4,5,6,7,8,9];

    const sudokuSolverRecurse = function(startingRow, startingColumn) {
        let row;
        let column;
        for (row = startingRow; row < board.length; row++) {
            for (column = startingColumn; column < board.length; column++) {
                if (board[row][column] === '.') {
                    let currentNumber;

                    for (let i = 0; i < options.length; i++) {
                        currentNumber = options[i];
                        //place number in current cell
                        board[row][column] = currentNumber;

                        if (!validate(board, row, column)) {
                           board[row][column] = '.'
                           continue;
                        } else {
                            if (sudokuSolverRecurse(row, column)) {
                                return true;
                            }
                        }
                    }

                }
            }
        }

        if (row === 9 && column === 9) {
            return true;
        }
        return false;
    };

    rsudokuSolverRecurse(0, 0);
};

