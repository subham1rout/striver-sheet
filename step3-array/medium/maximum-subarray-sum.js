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
console.log(`Maximum sub array sum from the array [ ${arr} ] is ${maximumSubarraySum(arr)}`);

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
console.log(`better approach -> Maximum sub array sum from the array [ ${arr} ] is ${maximumSubarraySum1(arr)}`);

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
console.log(`optimal approach -> Maximum sub array sum from the array  [ ${arr} ] is ${kadanesAlgorithm(arr)}`);

//print the sub array with maximum sum
function printSubarrayAlgorithm(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let ansstart;
    let ansend;
    for (let i = 0; i < arr.length; i++) {
        if (sum == 0) {
            ansstart = i;
        }
        sum += arr[i];
        if (sum > max) {
            max = sum;
            ansend = i;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    let maxsubarray = [];
    for (let i = ansstart; i <= ansend; i++) {
        maxsubarray.push(arr[i]);
    }
    return maxsubarray;
}
console.log(`Maximum subarray from the array [ ${arr} ] is [ ${printSubarrayAlgorithm(arr)} ]`);


//revision-1
function maxSubarraySum(arr, n) {
    let maxsum = Number.MIN_SAFE_INTEGER;
    let start = -1;
    let end = -1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum > maxsum) {
                maxsum = sum;
                start = i;
                end = j;
            }
        }
    }
    let subarr = [];
    for (let i = start; i <= end; i++) {
        subarr.push(arr[i]);
    }
    console.log("Result subarray is ", subarr);
    return maxsum;
}
console.log("Maximum subarray sum=", maxSubarraySum(arr, length));


function maxSubarraySum1(arr, n) {
    let maxsum = Number.MIN_SAFE_INTEGER;
    let start = -1;
    let end = -1;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum > maxsum) {
                maxsum = sum;
                start = i;
                end = j;
            }
        }
    }
    let subarr = [];
    for (let i = start; i <= end; i++) {
        subarr.push(arr[i]);
    }
    console.log("Result subarray is ", subarr);
    return maxsum;
}
console.log("Maximum subarray sum1=", maxSubarraySum1(arr, length));