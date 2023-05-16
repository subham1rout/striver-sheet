const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//brute force 
function longestConsecutiveSequence(arr) {
    let n = arr.length;
    let max = 1;
    for (let i = 0; i < n; i++) {
        let count = 1;
        let x = arr[i];
        let y = x + 1;
        let found = true;
        while (found) {
            for (let j = 0; j < n; j++) {
                found = false;
                if (y == arr[j]) {
                    found = true;
                    count++;
                    y++;
                    if (count > max) {
                        max = count;
                    }
                    break;
                }
            }
        }
    }
    return max;
}

let value = longestConsecutiveSequence(arr);
console.log(`Longest Consecutive Sequnce of the array [ ${arr} ] is ${value}`);

//alternate brute force approach
var longestConsecutive = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let count = 1;
        while (ls(nums, x + 1) == true) {
            x = x + 1;
            count++;
        }
        if (max <= count) {
            max = count;
        }
    }
    return max;
};

var ls = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            return true;
        }
    }
    return false;
}

let value1 = longestConsecutive(arr);
console.log(`Longest Consecutive Sequnce of the array [ ${arr} ] is ${value1}`);