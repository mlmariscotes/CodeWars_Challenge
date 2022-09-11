## Sudoku Solution Validator
![image](https://user-images.githubusercontent.com/99033220/189518632-0791d8ae-ff1b-4343-942a-b159a855707a.png)
![image](https://user-images.githubusercontent.com/99033220/189518639-16bc7403-efce-43e8-8747-f5145b983723.png)
![image](https://user-images.githubusercontent.com/99033220/189518682-b012c5e9-d30e-4f07-b6e6-f0dbd770ab7a.png)

---
```JavaScript
function validSolution(board){
    //Horizontal check
    var rowcheck = function(br) {
        for(var i = 0; i < br.length; i++) {
            for(var j = 1; j < br[i].length; j++) {
                if(br[i][j] != 0) {
                    if(br[i][j] === br[i][j-1]) return false;
                }
            }
        }
        return true;
    };
    //vertical check
    var colcheck = function(br){
        for(var i = 0; i < br.length; i++) {
            for(var j = 1; j < br[i].length; j++) {
                if(br[j][i] != 0) {
                    if(br[j][i] === br[j-1][i]) return false;
                }
            }
        }
        return true;
    };
    var diagonalcheck = function(br){
        var res = [];
        for(var i = 0; i < br.length; i++) {
            for(var j = 0; j < br[i].length; j++) {
                res.push(br[i][j]);
            }
        }
        res = res.sort();
        for(var k = 1; k < res.length; k++) {
            if(res[k] != 0) {
                if(res[k] === res[k-1]) return false;
            }
        }
        return true;
        
    }
    //3 x 3 grid check
    var brslice = function(row, column){
        var br = [];
        br.push([board[row][column], board[row][column+1], board[row][column+2]]);
        br.push([board[row+1][column], board[row+1][column+1], board[row+1][column+2]]);
        br.push([board[row+2][column], board[row+2][column+1], board[row+2][column+2]]);
        return rowcheck(br) && colcheck(br) && diagonalcheck(br);
    }
    return colcheck(board) && rowcheck(board) && brslice(0,0) && brslice(0,3) && brslice(0,6) && brslice(3,0) && brslice(3,3) && brslice(3,6) && brslice(6,0) && brslice(6,3) && brslice(6,6);
}
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 7, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]));


var isValidSudoku = function(board) {
    const row = new Set();
    const cols = new Map();
    const subBoxes = new Map(); 
    const n = 3;

    for (let i = 0; i < board.length; i++) {
        let  x_i = Math.floor(i/n);
        if (!subBoxes.has(x_i)) subBoxes.set(x_i, new Map());
        row.clear();
        for (let j = 0; j < board[i].length; j++) {
            let x_j = Math.floor(j/n);
            if (!subBoxes.get(x_i).has(x_j)) subBoxes.get(x_i).set(x_j, new Set());
            if (!cols.has(j)) {
                cols.set(j, new Set());
            }
            if (row.has(board[i][j])) {
                return false;
            }
            if (cols.get(j).has(board[i][j])) {
                return false;
            }
            if (subBoxes.get(x_i).get(x_j).has(board[i][j])) {
                return false;
            }
            if (board[i][j] !== '.') {
                row.add(board[i][j]);
                cols.set(j, cols.get(j).add(board[i][j]));
                subBoxes.get(x_i).get(x_j).add(board[i][j]);
            }
        }
    }
    return true;    
};


```
