const prompt = require("prompt-sync")({ sigint: true });

//input
let n1 = Number.parseInt(prompt("enter pass by value number: "));
let n2 = Number.parseInt(prompt("enter pass by reference number: "));

//in js
//pass by value - js always pass by value for primitive types strings, numbers
//pass by reference - js use array or objects which pass by reference

function passedByValue(m, n) {
    m = m + 1;
    n = n + 2;
}

passedByValue(n1, n2);
console.log("After passed by value", n1, n2);

function passedByReference(arr) {
    arr[0] += 1;
    arr[1] += 2;
}
let arr = [n1, n2];
passedByReference(arr);
console.log("After passed by reference", arr);