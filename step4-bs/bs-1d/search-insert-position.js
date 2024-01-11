const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const target = parseInt(prompt("enter target for the array:"));

//time=O(logn) and space=O(1)
function searchInsertPosition(arr, length, target) {
    let low = 0;
    let high = length - 1;
    let ans = length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) {
            ans = mid;
            break;
        } else if (arr[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
console.log("Insert Position/Available Position is ", searchInsertPosition(arr, length, target));