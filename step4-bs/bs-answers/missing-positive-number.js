const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("Enter the length of the arr:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const k = parseInt(prompt("enter the kth position:"));

function getMissingPositiveNumber(arr, n, k) {
    let arr2 = [];
    for (let i = 0; i < 100; i++) {
        if (!arr.includes(i)) {
            arr2.push(i);
        }
    }
    return arr2[k];
}
console.log("Missing Number is ", getMissingPositiveNumber(arr, length, k));
