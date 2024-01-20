const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}

//time=O(logn) and space=O(1)
function minimum(arr, n) {
    let low = 0;
    let high = n - 1;
    let ans = Number.MAX_SAFE_INTEGER;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[low] <= arr[high]) {
            if (arr[low]<ans) {
                ans = arr[low];
            }
            break;
        }
        if (arr[low] <= arr[mid]) {
            if (arr[low] < ans) {
                ans = arr[low];
            }
            low = mid + 1;
        } else {
            if (arr[mid] < ans) {
                ans = arr[mid];
            }
            high = mid - 1;
        }
    }
    return ans;
}

console.log("Minimum in the Array is ", minimum(arr, length));