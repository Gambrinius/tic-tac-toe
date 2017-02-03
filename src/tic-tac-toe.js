class TicTacToe {
    constructor() {
        this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'x';
    }

    // should return x or o
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    //should properly update class state (change current player, update marks storage etc.)
    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] == null) {
            this.playField[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer == 'x') {
                this.currentPlayer = 'o';
            }
            else {
                this.currentPlayer = 'x';
            }
        }

    }

    //should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {

    }

    //should return winner symbol (x or o) or null if there is no winner yet
    getWinner() {

    }

    //should return true if there is no more fields to place a x or o
    noMoreTurns() {
        let freePlace = 9;

        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if (this.playField[i][j] != null){
                    freePlace--;
                }
            }
        }
        return freePlace == 0;
    }

    //should return true if there is no more turns and no winner
    isDraw() {

    }

    //should return matrix[row][col] value (if any) or null
    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
