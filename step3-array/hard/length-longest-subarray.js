const prompt = require("prompt-sync")({ config: true });

let length = parseInt(prompt("enter the length of the array:"));
let array = [];
for (let i = 0; i < length; i++) {
    array.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^3) and space=O(1)
function lengthLongestSubarray(arr, length) {
    let maxlength = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum == 0) {
                let length = j - i + 1;
                if (length > maxlength) {
                    maxlength = length;
                }
            }
        }
    }
    return maxlength;
}
console.log("Length of longest subarray with sum 0 is ", lengthLongestSubarray(array, length));


//better -> time=O(n^2) and space=O(1)
function lengthLongestSubarray1(arr, length) {
    let maxlength = 0;
    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = i; j < length; j++) {
            sum += arr[j];
            if (sum == 0) {
                let templength = j - i + 1;
                if (templength > maxlength) maxlength = templength;
            }
        }
    }
    return maxlength;
}
console.log("Length of longest subarray1 with sum 0 is ", lengthLongestSubarray1(array, length));


//optimal -> time=O(nlogn) and space=o(n)
function lengthLongestSubarray2(arr, length) {
    let maxlength = 0;
    let sum = 0;
    let hashmap = new Map();
    for (let i = 0; i < length; i++) {
        sum += arr[i];
        if (sum == 0) {
            if (i + 1 > maxlength) {
                maxlength = i + 1;
            }
        } else {
            if (hashmap.has(sum)) {
                let value = hashmap.get(sum);
                if (i - value > maxlength) {
                    maxlength = i - value;
                }
            } else {
                hashmap.set(sum, i);
            }
        }
    }
    return maxlength;
}
console.log("Length of longest subarray2 with sum 0 is ", lengthLongestSubarray2(array, length));