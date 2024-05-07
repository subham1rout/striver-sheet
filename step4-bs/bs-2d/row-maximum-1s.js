const prompt = require("prompt-sync")({ sigint: true });

const n = parseInt(prompt("enter no of rows:"));
const m = parseInt(prompt("enter no of columns:"));

//input
const mat = [];
for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < m; j++) {
        arr.push(parseInt(prompt("enter the number:")));
    }
    mat.push(arr);
}

//brute -> time=O(n*m) and space=O(1)
function getRowIndexHavingMaxOnes(mat, n, m) {
    let max = -1;
    let index = -1;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < m; j++) {
            if (mat[i][j] == 1) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            index = i;
        }
    }
    return index;
}
console.log("Row index having maximum 1's is", getRowIndexHavingMaxOnes(mat, n, m));

//optimal  -> time=O(n*logm) and space=O(1)
function lowerBound(arr, num) {
    let ans = arr.length;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= num) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function getRowIndexHavingMaxOnes1(mat, n, m) {
    let max = -1;
    let index = -1;
    for (let i = 0; i < n; i++) {
        let lb = lowerBound(mat[i], 1);
        let temp = m - lb;
        if (temp > max) {
            max = temp;
            index = i;
        }
    }
    return index;
}
console.log("1Row index having maximum 1's is", getRowIndexHavingMaxOnes1(mat, n, m));