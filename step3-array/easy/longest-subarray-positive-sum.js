const prompt = require("prompt-sync")({ sigint: true });

//input arr
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}
let sum = parseInt(prompt("Enter sum of subarray:"));

//brute force approach -> time=O(n^3) and space=O(1)
function longestSubarray(arr, k) {
    let maxlength = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum == k) {
                if (j - i + 1 > maxlength) {
                    maxlength = j - i + 1;
                }
            }
        }
    }
    return maxlength;
}

let longestsubarr = longestSubarray(arr, sum);
console.log(`Longest subarray length from the array [ ${arr} ] is ${longestsubarr}`);

//brute force approach -> time=O(n^2) and space=O(1)
function longestSubarray1(arr, k) {
    let maxlength = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == k) {
                if (j - i + 1 > maxlength) {
                    maxlength = j - i + 1;
                }
            }
        }
    }
    return maxlength;
}

let longestsubarr1 = longestSubarray1(arr, sum);
console.log(`Longest subarray length from the array [ ${arr} ] is ${longestsubarr1}`);
