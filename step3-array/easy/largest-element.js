const prompt = require("prompt-sync")({ sigint: true });

//input array
const length = parseInt(prompt("enter array length: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number: ")));
}

//defining function
function findGretest(arr) {
    let max = arr[0];
    for (let i = 0; i < length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//output
let gretest = findGretest(arr);
console.log("Gretest number from array is", gretest);

//time complexity=O(n) and space complexity=O(1)


//revision-1
//time=o(nlogn) and space=O(n)
function largestElement(arr, n) {
    arr = arr.sort((a, b) => a - b);
    return arr[n - 1];
}
console.log("largest element -> ", largestElement(arr, length));

//time=O(n) and space=O(1)
function largestElementOptimal(arr, n) {
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log("largest element optimal -> ", largestElementOptimal(arr, length));