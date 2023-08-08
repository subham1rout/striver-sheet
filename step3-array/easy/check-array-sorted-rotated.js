const prompt = require("prompt-sync")({ sigint: true });

//take input
let arr = [];
const length = Number.parseInt(prompt("Enter the length of the array:"));
let k = 0;
while (k < length) {
    arr.push(parseInt(prompt("Enter a number:")));
    k++;
}

//defining function
function findMinimum(arr) {
    let minimumindex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[minimumindex] > arr[i]) {
            minimumindex = i;
        }
    }
    return minimumindex;
}

function checkSorted(arr, low, high) {
    if (low >= high) {
        return true;
    } else {
        for (let i = low; i < high; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
}

function checkRotated(arr) {
    if (arr[0] > arr[arr.length - 1]) {
        return true;
    }
    return false;
}

function checkSortedRotated(arr) {
    if (arr[0] < arr[arr.length - 1]) {
        let isSorted = checkSorted(arr, 0, arr.length - 1);
        if (isSorted) {
            return 2;
        }
        return 3;
    } else if (arr[0] === arr[arr.length - 1]) {
        let isSorted = checkSorted(arr, 0, arr.length - 2);
        if (isSorted) {
            return 2;
        }
        return 3;
    } else {
        let minindex = findMinimum(arr);
        let first = checkSorted(arr, 0, minindex - 1);
        let last = checkSorted(arr, minindex + 1, arr.length - 1);
        let rotated = checkRotated(arr);
        if (first && last && rotated) {
            return 1;
        } else if (first && last) {
            return 2;
        } else {
            return 3;
        }
    }
}

//output
let output = checkSortedRotated(arr);
if (output == 1) {
    console.log("Given array is sorted and rotated");
} else if (output == 2) {
    console.log("Given array is sorted and rotated 0 position");
} else {
    console.log("Given array either not sorted or not rotated");
}

//leetcode approach
function checkSortedRotatedNew(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[(i + 1) % arr.length]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}

//leetcode output
let result = checkSortedRotatedNew(arr);
if (result == true) {
    console.log("leetcode approach: array is sorted and rotated");
} else {
    console.log("leetcode approach: array is not sorted or rotated");
}

//revision-1
var check = function (nums) {
    let length = nums.length;
    let count = 0;
    if (nums[length - 1] > nums[0]) count++;
    for (let i = 1; i < length; i++) {
        if (nums[i] < nums[i - 1]) {
            count++;
        }
        if (count > 1) return false;
    }
    return true;
};
check(arr);