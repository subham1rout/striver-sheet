const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const target = parseInt(prompt("enter target for the array:"));


//time=2*O(logn) and space=O(1)
function firstOccurance(arr, n, k) {
    let first = -1;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == k) {
            first = mid;
            high = mid - 1;
        } else if (arr[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return first;
}

function lastOccurance(arr, n, k) {
    let last = -1;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == k) {
            last = mid;
            low = mid + 1;
        } else if (arr[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return last;
}

function countOccurance(arr, length, target) {
    let first = firstOccurance(arr, length, target);
    if (first == -1) return 0;
    let last = lastOccurance(arr, length, target);
    return last - first + 1;
}

console.log(`Count occurance of ${target} in Arr = ${countOccurance(arr, length, target)}`);
