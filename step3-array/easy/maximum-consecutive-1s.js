const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = Number.parseInt(prompt("enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(Number.parseInt(prompt("enter number:")));
}

//defining function -> optimal approach -> time = O(n) and space = O(1)
function getMaximumConsecutiveOnes(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
            if (count > max) {
                max = count;
            }
        } else {
            count = 0;
        }
    }
    return max;
}

let result = getMaximumConsecutiveOnes(arr);
console.log("Maximum consecutive ones in the array ", arr, " is ", result);