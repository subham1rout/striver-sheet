const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}

//brute -> time=O(n) and space=O(1)
function findPeak(arr, n) {
    for (let i = 0; i < n; i++) {
        if ((i == 0 || arr[i - 1] < arr[i]) && (i == n - 1 || arr[i] > arr[i + 1])) {
            return i;
        }
    }
}
console.log("Peak Element Index from the Array", findPeak(arr, length));

//optimal -> time=O(logn) and space=O(1)
function findPeak2(arr, n) {
    if (n == 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;
    let low = 1;
    let high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        } else if (arr[mid] > arr[mid - 1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
console.log("Peak Element2 Index from the Array", findPeak2(arr, length));