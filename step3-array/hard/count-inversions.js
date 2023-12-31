const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^2) and space=O(1)
function countInversions(arr, length) {
    let count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log("Count of the inversions of the array:", countInversions(arr, length));

//optimal -> time=O(nlogn) and space=O(1)
function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    let count = 0;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            count += mid - left + 1;
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
    // console.log("low", low, "high", high, "count", count);
    return count;
}
function mergeSort(arr, low, high) {
    let count = 0;
    if (low >= high) return 0;
    let mid = Math.floor((low + high) / 2);
    count += mergeSort(arr, low, mid);
    count += mergeSort(arr, mid + 1, high);
    count += merge(arr, low, mid, high);
    return count;
}
function countInversions2(arr, length) {
    let count = mergeSort(arr, 0, length - 1);
    return count;
}
console.log("Count Inversion =", countInversions2(arr, length));