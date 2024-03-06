const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("Enter the length of the arr:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const hour = parseInt(prompt("enter the hour:"));


//brute -> time=O(n*max(arr)) and space=O(1)
function getMax(arr, n) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getTotalHour(arr, n, noOfBanana) {
    let takeHour = 0;
    for (let i = 0; i < n; i++) {
        takeHour += Math.ceil(arr[i] / noOfBanana);
    }
    return takeHour;
}

function minNoOfBananas(arr, n, hour) {
    let max = getMax(arr, n);
    for (let i = 1; i <= max; i++) {
        let takeHour = getTotalHour(arr, n, i);
        if (takeHour <= hour) {
            return i;
        }
    }
}

console.log("Minimum No of Bananas=", minNoOfBananas(arr, length, hour));

//optimal -> time=O(n)*log(max(arr))
function minNoOfBananas2(arr, n, hour) {
    let low = 1;
    let high = getMax(arr, n);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let spendHour = getTotalHour(arr, n, mid);
        if (spendHour <= hour) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

console.log("Minimum No of Bananas2=", minNoOfBananas2(arr, length, hour));