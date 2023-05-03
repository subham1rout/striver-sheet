const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter the length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//brute force -> time=O(n^3) and sppace=O(1)
function maximumSubarraySum(arr) {
    let n = arr.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k]
            }
            if (max < sum) {
                max = sum;
            }
        }
    }
    return max;
}

let sum = maximumSubarraySum(arr);
console.log(`Maximum sub array sum from the array [ ${arr} ] is ${sum}`);

//better approach -> time=o(n^2) and space=O(1)
function maximumSubarraySum1(arr) {
    let n = arr.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

let sum1 = maximumSubarraySum1(arr);
console.log(`better approach -> Maximum sub array sum from the array [ ${arr} ] is ${sum1}`);

//Kadane's Algorithm -> optimal solution -> time=O(n) and space=O(1)
function kadanesAlgorithm(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}

let sum2 = kadanesAlgorithm(arr);
console.log(`optimal approach -> Maximum sub array sum from the array  [ ${arr} ] is ${sum2}`);