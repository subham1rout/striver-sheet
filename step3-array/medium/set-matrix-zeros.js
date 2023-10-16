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
obj.setMatrixZeros(matrix);
console.log("Result matrix is ", matrix);


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

let obj1 = new Better();
obj1.setMatrixZeros(matrix);
console.log("Result matrix is ", matrix);

//optimal approach -> time=O(2*m*n) and space=O(1)
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


//revision-1
//brute - time=O(m*n*(m+n))+O(n*m) and space=O(m*n)
function deepCopyArray(arr) {
    if (!Array.isArray(arr)) {
        return arr; // If it's not an array, return the value as is
    }

    const copy = [];
    for (let item of arr) {
        copy.push(deepCopyArray(item)); // Recursively copy inner arrays or values
    }
    return copy;
}

function setZeros(arr, m, n) {
    let newarr = deepCopyArray(arr);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                for (let k = 0; k < m; k++) {
                    newarr[k][j] = 0;
                }
                for (let k = 0; k < n; k++) {
                    newarr[i][k] = 0;
                }
            }
        }
    }
    return newarr;
}
console.log("Result after setting zeros", setZeros(matrix, m, n));

//brute -> time=O(n*m)+O(n+m) and space=O(1)
function setRowZero(arr, i, n) {
    for (let j = 0; j < n; j++) {
        if (arr[i][j] != 0) {
            arr[i][j] = -1;
        }
    }
}
function setColZero(arr, j, m) {
    for (let i = 0; i < m; i++) {
        if (arr[i][j] != 0) {
            arr[i][j] = -1;
        }
    }
}
function setZeros1(arr, m, n) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                setRowZero(arr, i, n);
                setColZero(arr, j, m);
                console.log(matrix);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == -1) {
                arr[i][j] = 0;
            }
        }
    }
}
setZeros1(matrix, m, n);
console.log("Result after setting zeros1", matrix);

//better -> time=O(2*n*m) and space=O(m+n)
function setZeros2(arr, m, n) {
    let row = new Array(m).fill(0);
    let col = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                arr[i][j] = 0;
            }
        }
    }
}
setZeros2(matrix, m, n);
console.log("Result after setting zeros2", matrix);

//optimal -> time=O(2*m*n) and space=O(1)
function setZeros3(arr, m, n) {
    let col1 = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                if (j == 0) {
                    col1 = 0;
                    arr[i][0] = 0;
                } else {
                    arr[i][0] = 0;
                    arr[0][j] = 0;
                }
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i][0] == 0 || arr[0][j] == 0) {
                arr[i][j] = 0;
            }
        }
    }
    for (let j = 1; j < n; j++) {
        if (arr[0][0] == 0 || arr[0][j] == 0) {
            arr[0][j] = 0;
        }
    }
    for (let i = 0; i < m; i++) {
        if (col1 == 0 || arr[i][0] == 0) {
            arr[i][0] = 0;
        }
    }
}
setZeros3(matrix, m, n);
console.log("Result after setting zeros3", matrix);
