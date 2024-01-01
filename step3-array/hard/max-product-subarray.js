const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^3) and space=O(1)
function maxProduct(arr, length) {
    let maxP = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let temp = 1;
            for (let k = i; k <= j; k++) {
                temp *= arr[k];
            }
            if (temp > maxP) {
                maxP = temp;
            }
        }
    }
    return maxP;
}
console.log("Maximum product out of all subarray is ", maxProduct(arr, length));

//better -> time=O(n^2) and space=O(1)
function maxProduct1(arr, length) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < length; i++) {
        let temp = 1;
        for (let j = i; j < length; j++) {
            temp *= arr[j];
            if (temp > max) {
                max = temp;
            }
        }
    }
    return max;
}
console.log("Maximum product out of all subarray1 is ", maxProduct1(arr, length));

//optimal -> time=O(n) and space=O(1)
function maxProduct2(arr, length) {
    let max = 1;
    let prefixM = 1;
    let suffixM = 1;
    for (let i = 0; i < length; i++) {
        if (prefixM == 0) prefixM = 1;
        if (suffixM == 0) suffixM = 1;
        prefixM *= arr[i];
        suffixM *= arr[length - i - 1];
        if (prefixM > suffixM) {
            if (prefixM > max) {
                max = prefixM;
            }
        } else {
            if (suffixM > max) {
                max = suffixM;
            }
        }
    }
    return max;
}
console.log("Maximum product out of all subarray2 is ", maxProduct2(arr, length));