const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}
let target = parseInt(prompt("enter the target of the array:"));

//brute -> time=O(n^4) and space=O(n^2)
function find4Sum(arr, n) {
    let ans = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let l = k + 1; l < n; l++) {
                    let sum = arr[i] + arr[j] + arr[k] + arr[l];
                    if (sum == target) {
                        ans.add(JSON.stringify([arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b)));
                    }
                }
            }
        }
    }
    return ans;
}
console.log("4 Sum of the arr:", find4Sum(arr, length));