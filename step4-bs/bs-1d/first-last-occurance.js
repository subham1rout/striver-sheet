const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const target = parseInt(prompt("enter target for the array:"));


//using lower and upper bound approach -> time=2*O(logn) and space=O(1)
function lowerBound(arr, n, k) {
    let low = 0;
    let high = n - 1;
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function upperBound(arr, n, k) {
    let low = 0;
    let high = n - 1;
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function occurance(arr, n, target) {
    let lb = lowerBound(arr, n, target);
    let ub = upperBound(arr, n, target);
    if (lb == n || arr[lb] != target) {
        return [-1, -1];
    }
    return [lb, ub - 1];
}

console.log(`Occcurance of first and last element of ${target} is `, occurance(arr, length, target));


//using binary search directly -> time=2*O(logn) and space=O(1)
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

function occurance1(arr, n, k) {
    let first = firstOccurance(arr, length, target);
    if (first == -1) return [-1, -1];
    let last = lastOccurance(arr, length, target);
    return [first, last];
}

console.log(`Occcurance of first and last element1 of ${target} is `, occurance1(arr, length, target));