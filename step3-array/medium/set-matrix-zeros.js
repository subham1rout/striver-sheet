const prompt = require("prompt-sync")({ sigint: true });

//taking matrix input
let m = parseInt(prompt("enter length of the row:"));
let n = parseInt(prompt("enter length of the column:"));
let matrix = [];
for (let i = 0; i < m; i++) {
    console.log(`Enter numbers from ${i + 1} row:`);
    let temp = [];
    for (let j = 0; j < n; j++) {
        temp.push(parseInt(prompt()));
    }
    matrix.push(temp);
}

console.log("Matrix is ", matrix);

//brute force -> time=O(mn*(m+n)+mn) =O(n^3) and space=O(1)
class BruteForce {

    setMatrixZeros(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    this.markRow(i, n, matrix);
                    this.markColumn(j, m, matrix);
                }
            }
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] == -1) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    markRow(i, n, matrix) {
        for (let k = 0; k < n; k++) {
            if (matrix[i][k] != 0) {
                matrix[i][k] = -1;
            }
        }
    }

    markColumn(j, m, matrix) {
        for (let k = 0; k < m; k++) {
            if (matrix[k][j] != 0) {
                matrix[k][j] = -1;
            }
        }
    }

}

let obj = new BruteForce();
// obj.setMatrixZeros(matrix);
// console.log("Result matrix is ", matrix);


//better -> time=O(2*n*m) and space=o(n)+O(m)
class Better {

    setMatrixZeros(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        let rowArr = new Array(m).fill(0);
        let colArr = new Array(n).fill(0);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    rowArr[i] = 1;
                    colArr[j] = 1;
                }
            }
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (rowArr[i] || colArr[j]) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}

// let obj1 = new Better();
// obj1.setMatrixZeros(matrix);
// console.log("Result matrix is ", matrix);

//optimal approach
class Optimal {

    setMatrixZeros(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        let col0 = 1;
        //mark row and column
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    if (j == 0) {
                        col0 = 0;
                    } else {
                        matrix[0][j] = 0;
                    }
                }
            }
        }
        //make inner value to zero
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[i][j] != 0) {
                    if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                        matrix[i][j] = 0;
                    }
                }
            }
        }
        //run upper column
        if (matrix[0][0] == 0) {
            for (let j = 0; j < n; j++) matrix[0][j] = 0;
        }
        //run side row
        if (col0 = 0) {
            for (let i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}


let obj2 = new Optimal();
obj2.setMatrixZeros(matrix);
console.log("Result matrix is ", matrix);