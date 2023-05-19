const prompt = require("prompt-sync")({ sigint: true });

//take matrix input
let length = parseInt(prompt("enter row or column length: "));
let matrix = [];
for (let i = 0; i < length; i++) {
    let temp = [];
    console.log(`enter ${i + 1} row element:`);
    for (let j = 0; j < length; j++) {
        temp.push(parseInt(prompt()));
    }
    matrix.push(temp);
}

console.log("matrix is ", matrix);

//brute force(clockwise) -> time=O(n^2) and space=O(n^2)
function roatateMatrix(matrix) {
    let length = matrix.length;
    let ansmatrix = [];

    //this for loop for array having zero values
    for (let i = 0; i < length; i++) {
        let temp = [];
        for (let j = 0; j < length; j++) {
            temp.push(0);
        }
        ansmatrix.push(temp);
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            // console.log("mapping", `(${i},${j}) -> ${j},${length - 1 - i}`);
            let row = length - 1 - i;
            ansmatrix[j][row] = matrix[i][j];
        }
    }
    return ansmatrix;
}

// let ans = roatateMatrix(matrix);
// console.log(`Rotate matrix is `, ans);

//brute force(anticlockwise) -> logic= ansmatrix[n-1-j][i]=matrix[i][j];

//optimal approach -> time=O(n^2)+O(n/2*n) (O(n/2) for each row reverse) and space=O(1)
function reverseRow(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function roatateMatrix(matrix) {
    let n = matrix.length;
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            // swap(matrix[i][j], matrix[j][i]);
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        reverseRow(matrix[i]);
    }
    return matrix;
}

let ans2 = roatateMatrix(matrix);
console.log(`Rotate matrix is `, ans2);

//optimal approach(anticlockwise) -> logic= first transpose the matrix and then reverse the coulmn of the matrix
//reverse column logic
for (let i = 0; i < n; i++) {
    let start = 0;
    let end = n - 1;
    while (start < end) {
        // swap(matrix[start][i],matrix[end][i]);
        let temp = matrix[start][i];
        matrix[start][i] = matrix[end][i];
        matrix[end][i] = temp;
        start++;
        end--;
    }
}