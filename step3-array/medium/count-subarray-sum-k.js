const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}
const sum = parseInt(prompt("Enter sum of the subarray:"));


//brute force -> time=O(n^3) and space=O(1)
function countSubarr(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
}

let count = countSubarr(arr, sum);
console.log("Number of subarray having sum ", sum, " is ", count);

//better -> time=O(n^2) and space=o(1)
function countSubarrBetter(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
}


let count1 = countSubarrBetter(arr, sum);
console.log("Number of subarray having sum ", sum, " is ", count1);