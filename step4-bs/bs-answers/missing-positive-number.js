const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("Enter the length of the arr:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const k = parseInt(prompt("enter the kth position:"));

//brute -> time=O(n) and space=o(n)
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

//2nd brute -> time=O(n) and space=O(1)
function getMissingPositiveNumber1(arr, n, k) {
    for (let i = 0; i < n; i++) {
        if (arr[i] <= k) {
            k++;
        } else {
            break;
        }
    }
    return k;
}
console.log("Missing Number1 is ", getMissingPositiveNumber1(arr, length, k));

//better
function getMissingPositiveNumber2(arr, n, k) {
    
}