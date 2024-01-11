const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
const target = parseInt(prompt("enter target for the array:"));


//time -> O(logn) and space=O(1)
function findFloorAndCeil(arr, length, target) {
    let low = 0;
    let high = length - 1;
    let floor = -1;
    let ceil = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) {
            ceil = arr[mid];
            floor = arr[mid];
            break;
        } else if (arr[mid] > target) {
            ceil = arr[mid];
            high = mid - 1;
        } else {
            floor = arr[mid];
            low = mid + 1;
        }
    }
    return [floor, ceil];
}
console.log("Floor and Ceil are", findFloorAndCeil(arr, length, target));