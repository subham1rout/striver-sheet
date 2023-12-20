const prompt = require("prompt-sync")({ config: true });

let length = parseInt(prompt("enter the length of the array:"));
let array = [];
for (let i = 0; i < length; i++) {
    array.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^3) and space=O(1)
function lengthLongestSubarray(arr, length) {
    let maxlength = -1;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
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

