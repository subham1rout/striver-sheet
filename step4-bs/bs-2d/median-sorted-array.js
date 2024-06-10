const prompt = require("prompt-sync")({ sigint: true });

//input
let n = parseInt(prompt("enter row length:"));
let m = parseInt(prompt("enter column length:"));
let matrix = [];
for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
        temp.push(parseInt(prompt("enter value:")));
    }
    matrix.push(temp);
}

//brute -> time=O(n*m)+O((n*m)log(n*m))
function getMedian(matrix, n, m) {
    let temparr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            temparr.push(matrix[i][j]);
        }
    }
    temparr = temparr.sort((a, b) => a - b);
    return temparr[Math.floor(n*m/2)];
}
console.log("Median of this matrix", getMedian(matrix, n, m));