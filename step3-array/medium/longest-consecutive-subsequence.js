const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//brute force -> time=O(n^3) and space=O(1)
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
console.log(`Longest Consecutive Sequnce of the array [ ${arr} ] is ${longestConsecutiveSequence(arr)}`);

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
console.log(`Longest Consecutive Sequnce of the array [ ${arr} ] is ${longestConsecutive(arr)}`);


//better approach -> time=O(nlogn) + O(n) and space=O(1)
function longestConsecutiveSequenceBetter(arr) {
    arr = arr.sort((a, b) => a - b);
    let max = 1;
    let count = 0;
    let smaller = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 == smaller) {
            count++;
            smaller = arr[i];
            if (count > max) {
                max = count;
            }
        } else if (arr[i] !== smaller) {
            count = 1;
            smaller = arr[i];
        }
    }
    return max;
}
console.log(`Longest Consecutive Sequnce of the array [ ${arr} ] is ${longestConsecutiveSequenceBetter(arr)}`);


//optimal approach -> time=O(n)+O(2n)=O(3n) and space=O(n)
function longestConsecutiveSequenceOptimal(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    let max = 1;
    for (const el of set) {
        let x = el;
        if (!set.has(x - 1)) {
            let count = 1;
            while (set.has(x + 1)) {
                count++;
                x++;
            }
            if (count > max) {
                max = count;
            }
        }
    }
    return max;
}
console.log(`Longest Consecutive Sequnce of the array [ ${arr} ] is ${longestConsecutiveSequenceOptimal(arr)}`);


//revision-1
//brute -> time=O(n^2) and space=O(1)
function longestConsecutive1(arr, n) {
    let max = 1;
    for (let i = 0; i < n; i++) {
        let count = 1;
        let temp = arr[i] + 1;
        while (arr.includes(temp)) {
            count++;
            temp++;
        }
        if (count > max) max = count;
        return max;
    }
}
console.log("Longest Consecutive sequence", longestConsecutive(arr, length));

