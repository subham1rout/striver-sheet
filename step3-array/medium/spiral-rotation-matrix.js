const prompt = require("prompt-sync")({ sigint: true });

//matrix input
let m = parseInt(prompt("enter row length: "));
let n = parseInt(prompt("enter column length: "));
let matrix = [];
for (let i = 0; i < m; i++) {
    console.log(`enter ${i + 1} rows element:`);
    let temp = [];
    for (let j = 0; j < n; j++) {
        temp.push(parseInt(prompt()));
    }
    matrix.push(temp);
}

console.log("matrix is ", matrix);

//optimal solution -> time=O(m*n) and space=O(m*n)
function spiralRotationMatrix(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    let ans = [];
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }
    return ans;
}
// console.log("Spiral print of the matrix is ", spiralRotationMatrix(matrix));


//revision-1
function spiralRotation(matrix, m, n) {
    let left = 0;
    let top = 0;
    let right = n - 1;
    let bottom = m - 1;
    let newarr = [];
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            newarr.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            newarr.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                newarr.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                newarr.push(matrix[i][left]);
            }
            left++;
        }
    }
    return newarr;
}
console.log("After spiral rotation", spiralRotation(matrix, m, n));