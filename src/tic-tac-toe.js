class TicTacToe {
    constructor() {
        this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'x';
        this.matchWinner = null;
    }

    // should return x or o
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    //should properly update class state (change current player, update marks storage etc.)
    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] == null) {
            this.playField[rowIndex][columnIndex] = this.currentPlayer; // set value to сell

            // change current player
            if (this.currentPlayer == 'x') {
                this.currentPlayer = 'o';
            }
            else {
                this.currentPlayer = 'x';
            }
        } // needs catch exceptions if try rewrite fill cell

        for (let j = 0, i = 0; i < 3; i++) { // check to horizontal matches
            if ((this.playField[i][j] == this.playField[i][j+1]) && (this.playField[i][j+1] == this.playField[i][j+2])){
                if (this.playField[i][j] == 'x' || this.playField[i][j] == 'o'){
                    this.matchWinner = this.playField[i][j]; // set match winner
                }
            }
        }

        for (let i = 0, j = 0; j < 3; j++) { // check to vertical matches
            if ((this.playField[i][j] == this.playField[i+1][j]) && (this.playField[i+1][j] == this.playField[i+2][j])){
                if (this.playField[i][j] == 'x' || this.playField[i][j] == 'o'){
                    this.matchWinner = this.playField[i][j]; // set match winner
                }
            }
        }

        let i = 0;
        // check main diagonal
        if (this.playField[i][i] == this.playField[i+1][i+1] && this.playField[i][i] == this.playField[i+2][i+2]) {
            if (this.playField[i][i] == 'x' || this.playField[i][i] == 'o') {
                this.matchWinner = this.playField[i][i];

            }
        }

        i = 0;
        // check secondary diagonal
        if (this.playField[i][i+2] == this.playField[i + 1][i+1] && this.playField[i][i+2] == this.playField[i+2][i]) {
            if (this.playField[i+1][i+1] == 'x' || this.playField[i+1][i+1] == 'o') {
                this.matchWinner = this.playField[i+1][i+1];

            }
        }
    }

    //should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {
        if(this.getWinner() != null || this.isDraw()){
            return true;
        } else {
            return false;
        }
    }

    //should return winner symbol (x or o) or null if there is no winner yet
    getWinner() {
        return this.matchWinner;
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
        if(this.getWinner() == null && this.noMoreTurns()){
            return true;
        } else {
            return false;
        }
    }

    //should return matrix[row][col] value (if any) or null
    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
