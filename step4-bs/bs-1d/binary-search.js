const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const target = parseInt(prompt("enter target for the array:"));

//iterative -> time=O(logn) and space=O(1)
function findNumber(arr, length, target) {
    let low = 0;
    let high = length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target == arr[mid]) return mid;
        else if (target > arr[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
console.log("Index number =", findNumber(arr, length, target));

//recursive -> time=O(logn) and space=O(1)
function findNumber2(arr, target, low, high) {
    if (low > high) return -1;
    // let mid = Math.floor((low + high) / 2);
    let mid = Math.floor(low + ((high - low) / 2)); //for overflow prevent
    if (arr[mid] == target) return mid;
    else if (target > arr[mid]) return findNumber2(arr, target, mid + 1, high);
    else return findNumber2(arr, target, low, mid - 1);
}
console.log("Index number2 =", findNumber2(arr, target, 0, length - 1));
