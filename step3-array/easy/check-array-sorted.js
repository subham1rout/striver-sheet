const prompt = require("prompt-sync")({ sigint: true });

//input array
const length = parseInt(prompt("enter array length: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number: ")));
}

//defining function
function checkSorted(arr, length) {
    let flag = 1;
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            flag = -1;
        }
    }
    return flag;
}

//output
let flag = checkSorted(arr, length);
if (flag == -1) {
    console.log("Given array is not sorted.");
} else {
    console.log("Array is sorted.");
}

//time complexity=O(n) and space complexity=O(n)