const prompt = require("prompt-sync")({ sigint: true });

//input
const arr = [];
const length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining func  -> optimal soultion -> time complexity=O(n)
function getSecondSmallest(arr) {

    let smallest = arr[0];
    let ssmallest = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            ssmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < ssmallest) {
            ssmallest = arr[i];
        }
    }
    return ssmallest;
}

//output
let secondSmallest = getSecondSmallest(arr);
console.log("Second smallest element from the array :", secondSmallest);


//revision-1

//brute force -> time=O(n+nlogn) and space=O(n)
function secondSmallest1(arr, n) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 1; i < n; i++) {
        if (arr[i] != arr[0]) {
            return arr[i];
        }
    }
}
console.log("second smallest -> ", secondSmallest1(arr, length));

//better -> O(2n) and O(1)
function secondSmallest2(arr, n) {
    let min = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] < min) min = arr[i];
    }
    let smin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] < smin && arr[i] > min) {
            smin = arr[i];
        }
    }
    return smin;
}
console.log("second smallest better -> ", secondSmallest2(arr, length));

//optimal -> O(n) and O(1)
function secondSmallest3(arr, n) {
    let min = arr[0];
    let smin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] < min) {
            smin = min;
            min = arr[i];
        } else if (arr[i] > min && arr[i] < smin) {
            smin = arr[i];
        }
    }
    return smin;
}
console.log("second smallest optimal -> ", secondSmallest3(arr, length));