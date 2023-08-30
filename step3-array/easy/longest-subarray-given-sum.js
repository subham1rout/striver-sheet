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

//optimal approach(not working)
function longestsubarrOptimal(arr, k) {
    let right = 0;
    let left = 0;
    let sum = arr[0];
    let maxlength = 0;
    while (right < arr.length) {
        while (left <= right && sum > k) {
            sum = sum - arr[left];
            left++;
        }
        if (sum == k) {
            let temp = right - left + 1;
            if (temp > maxlength) {
                maxlength = temp;
            }
        }
        right++;
        if (right < arr.length) {
            sum += arr[right];
        }
    }
    return maxlength;
}

let longestsubarroptimal = longestsubarrOptimal(arr, sum);
console.log(`Longest subarray from the array [ ${arr} ] from optimal solution is ${longestsubarroptimal}`);


//revision-1
//brute -> time=O(n^3) and space=O(1)
function maxSubarrLength(arr, n, k) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let l = i; l <= j; l++) {
                sum += arr[l];
            }
            if (sum == k) {
                let length = j - i + 1;
                if (max < length) {
                    // console.log("i", i, "j", j, "k", k, "sum", sum, "max", max, "length", length);
                    max = length;
                }
            }
        }
    }
    return max;
}
console.log(`Longest subarray length is ${maxSubarrLength(arr, length, sum)}`);

//brute -> time=O(n^2) and space=O(1)
function maxSubarrLength(arr, n, k) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum == k) {
                if (max < j - i + 1) {
                    max = j - i + 1;
                }
            }
        }
    }
    return max;
}
console.log(`Longest subarray length is ${maxSubarrLength(arr, length, sum)}`);