const prompt = require("prompt-sync")({ sigint: true });

//input
const arr = [];
const length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}
console.log("Array is ", arr);

//defining func
function getSecondLargest(arr) {

    /*brute force soultion*/
    arr = arr.sort((a, b) => a - b);
    let max = arr[arr.length - 1];
    for (let i = length - 2; i >= 0; i--) {
        if (arr[i] !== max) {
            return arr[i];
        }
    }
    // time complexity=O(nlogn+n)

    /*better approach*/
    let largest1 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest1) {
            largest1 = arr[i];
        }
    }
    let secondLargest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
    // time complexity = O(2n)

    /*optimal soultion*/
    let largest = arr[0];
    let slargest = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            slargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > slargest) {
            slargest = arr[i];
        }
    }
    return slargest;
    //time complexity=O(n)
}

//output
let secondLargest = getSecondLargest(arr);
console.log("Second largest element from the array :", secondLargest);


// revision-1
//brute force -> time=O(nlogn+n) and space=O(n)
function secondLargest1(arr, n) {
    arr = arr.sort((a, b) => a - b);
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] != arr[n - 1]) {
            return arr[i];
        }
    }
}
console.log("second largest -> ", secondLargest1(arr, length));

//better -> time=O(2n) and space=O(1)
function secondLargest2(arr, n) {
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) max = arr[i];
    }
    let secondMax = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > secondMax && arr[i] < max) secondMax = arr[i];
    }
    return secondMax;
}
console.log("second largest better solution-> ", secondLargest2(arr, length));

//optimal -> time=O(n) and space=O(1)
function secondLargest3(arr, n) {
    let max = arr[0];
    let smax = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            smax = max;
            max = arr[i];
        } else if (arr[i] < max && arr[i] > smax) {
            smax = arr[i];
        }
    }
    return smax;
}
console.log("second largest optimal solution-> ", secondLargest3(arr, length));