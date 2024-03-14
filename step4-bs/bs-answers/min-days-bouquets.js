const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}
const noOfBouquets = parseInt(prompt("enter the no of bouquets:"));
const roses = parseInt(prompt("enter no of bloomed roses each bouquets contain:"));

//brute time=O(max-min+1)*O(n) and space=O(1)
function getMin(arr, n) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
function getMax(arr, n) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function isPossibleBouquets(arr, n, m, k, days) {
    let count = 0;
    let noOfBouquets = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= days) {
            count++;
        } else {
            noOfBouquets += Math.floor(count / k);
            count = 0;
        }
    }
    noOfBouquets += Math.floor(count / k);
    if (noOfBouquets >= m) {
        return true;
    } else {
        return false;
    }
}
function minDays(arr, n, m, k) {
    if (m * k > n) return -1;
    let min = getMin(arr, n);
    let max = getMax(arr, n);
    for (let i = min; i <= max; i++) {
        if (isPossibleBouquets(arr, n, m, k, i)) {
            return i;
        }
    }
    return -1;
}
console.log(`minimum days to make ${noOfBouquets} bouquets = ${minDays(arr, length, noOfBouquets, roses)}`);

//optimal -> time=O(log(max-min))*O(n) and space=O(1)
function minDays2(arr, n, m, k) {
    if (m * k > n) return -1;
    let low = getMin(arr, n);
    let high = getMax(arr, n);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossibleBouquets(arr, n, m, k, mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
console.log(`minimum days to make ${noOfBouquets} bouquets2 = ${minDays2(arr, length, noOfBouquets, roses)}`);