
const obj = {
    'X': 88,
    'O': 79,
    '-': 0
};

let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
];


const Game = () => {
    let isGameOver = false;
    const players = {
        'X': 1,
        'O': 2,
    };
    
    while(!isGameOver) {
        printBoard();
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.prompt(`Player ${players['X']}'s turn: Enter an X `, (chars) => {
            console.log('Hi I have played');
        });
        let winner = checkWinner(board);

        if (winner) {
            isGameOver = true;
            console.log('We have a winner');
        } 
    }
}

const checkWinner = (board) => {
    let winner = false;
    let rows = board;
    let columns = rotateMatrix(board);
    let diagonals = [
        [board[0][0], board[1][1], board[2][2] ], 
        [board[2][0], board[1][1], board[0][2] ], 
    ];

    const checkRow = (row) => {
        var total = row.forEach((num) => {
            let currValue = obj[num];
            let sum = 0;
            sum += currValue;
            return sum;
        });
        
        if (total === 88 * 3 || total === 79 * 3) {
            winner = true;
        }
    };

    rows.forEach((row) => {
        checkRow(row);
    });

    columns.forEach((column) => {
        checkRow(column);
    });

    diagonals.forEach((diag) => {
        checkRow(diag);
    });

    return winner;
};

const rotateMatrix = (matrix) => {
    let result = [];

    for (let row = 0; row < matrix.length ; row += 1) {
        let tempArr = [];
        
        for (let col = matrix[row].length - 1; col >= 0; col -= 1) {
            tempArr.push(matrix[col][row]);
        }
        result.push(tempArr);
    }

    return result;
}

const printBoard = () => {
    console.log('Tic-Tac-Toe: \n' +
    ' 1 | 2 | 3     \n' +
    '--- --- ---    \n' +
    ' 4 | 5 | 6     \n' +
    '--- --- ---    \n' +
    ' 7 | 8 | 9     \n' +
    '--- --- --- \n');
};

Game();