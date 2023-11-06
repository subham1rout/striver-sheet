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


//problem-2 -> get a particular row
let n = Number.parseInt(prompt("Enter the row you want to get of pascal's triangle: "));
function getRow(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(getValue(n - 1, i - 1));
    }
    return arr;
}
console.log("Row =", getRow(n));
