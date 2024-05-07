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
let target = parseInt(prompt("enter the target search element:"));

//brute -> time=O(n*m) and space=O(1)
function checkElement(mat, n, m, target) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] == target) {
                return true;
            }
        }
    }
    return false;
}
console.log("Search result of element is ", checkElement(mat, n, m, target));

//better -> time=O(n*logm) and space=O(1)
function searchElement(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) {
            return true;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
function checkElement2(mat, n, m, target) {
    for (let i = 0; i < n; i++) {
        if (mat[i][0] <= target && target <= mat[i][m - 1]) {
            let value = searchElement(mat[i], target);
            if (value == true) {
                return true;
            }
        }
    }
    return false;
}
console.log("Search2 result of element is ", checkElement2(mat, n, m, target));

//optimal -> time=O(log(n*m)) and space=O(1)
function checkElement3(mat, n, m, target) {
    let low = 0;
    let high = n * m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let temp = mat[Math.floor(mid / m)][Math.floor(mid % m)];
        if (temp == target) {
            return true;
        } else if (temp < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
console.log("Search3 result of element is", checkElement3(mat, n, m, target));