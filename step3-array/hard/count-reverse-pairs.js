const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^2) and space=O(1)
function countReversePairs(arr, length) {
    let count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > 2 * arr[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log("Total Reverse pairs=", countReversePairs(arr, length));

//optimal -> time=O(2nlogn) and space=O(n)
function countPairs(arr, low, mid, high) {
    let right = mid + 1;
    let count = 0;
    for (let i = low; i <= mid; i++) {
        while (right <= high && arr[i] > 2 * arr[right]) {
            right++;
        }
        count += right - mid - 1;
    }
    return count;
}
function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}
function mergeSort(arr, low, high) {
    if (low >= high) return 0;
    let count = 0;
    let mid = Math.floor((low + high) / 2);
    count += mergeSort(arr, low, mid);
    count += mergeSort(arr, mid + 1, high);
    count += countPairs(arr, low, mid, high);
    merge(arr, low, mid, high);
    return count;
}
function countReversePairs1(arr, length) {
    return mergeSort(arr, 0, length - 1);
}
console.log("Total Reverse pairs1=", countReversePairs1(arr, length));