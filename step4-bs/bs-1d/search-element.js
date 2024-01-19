const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const target = parseInt(prompt("enter target for the array:"));

//time=O(logn) and space=O(1)
function searchElement(arr, length, el) {
    let low = 0;
    let high = length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == el) {
            return mid;
        }
        if (arr[low] < arr[mid]) {
            if (arr[low] <= el && el <= arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] < arr[high]) {
            if (arr[mid] <= el && el <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            low++;
        }
    }
    return -1;
}

console.log(`Element ${target} present in index ${searchElement(arr, length, target)}`);