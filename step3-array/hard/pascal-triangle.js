const prompt = require("prompt-sync")({ sigint: true });

let row = Number.parseInt(prompt("Enter the row no of pascal's triangle: "));
let column = Number.parseInt(prompt("Enter the column no of pascal's triangle: "));

//problem-1 -> get the value of a particular row and column -> time=O(c) and space=O(1)
function getValue(r, c) {
    let value = 1;
    for (let i = 0; i < c; i++) {
        value = value * (r - i);
        value = Math.floor(value / (i + 1));
    }
    return value;
}
console.log("Value =", getValue(row - 1, column - 1));


//problem-2 -> brute force -> get a particular row -> time=O(n*c) and space=O(n)
let n = Number.parseInt(prompt("Enter the row you want to get of pascal's triangle: "));
function getRow(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(getValue(n - 1, i - 1));
    }
    return arr;
}
console.log("Row =", getRow(n));

//problem-2 -> optimal -> time=O(n) and space=O(1) if we print otherwise O(n)
function getRow1(n) {
    let ans = 1;
    let arr = [];
    arr.push(ans);
    for (let i = 1; i < n; i++) {
        ans = ans * (n - i);
        ans = Math.floor(ans / i);
        arr.push(ans);
    }
    return arr;
}
console.log("Row1 =", getRow1(n));

//problem-3 -> print entire pascal triangle -> time=O(n^2) and space=o(1)
function printPascalTriangle(n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        ans.push(getRow1(i));
    }
    return ans;
}
console.log("Pascal Triangle =", printPascalTriangle(n));