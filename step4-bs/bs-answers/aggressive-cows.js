const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}
let cows = parseInt(prompt("enter the no of cows:"));

//brute -> time=O(max-min)*O(n) and space=O(1)
function isPossible(arr, minDis, cows) {
    let countCows = 1;
    let lastCows = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastCows >= minDis) {
            countCows++;
            lastCows = arr[i];
        }
    }
    if (countCows >= cows) {
        return true;
    } else {
        return false;
    }
}
function getMaxDistance(arr, length, cows) {
    arr.sort((a, b) => a - b);
    let min = arr[0];
    let max = arr[length - 1];
    for (let i = min; i <= max; i++) {
        let value = isPossible(arr, i, cows);
        if (value) {
            continue;
        } else {
            return i - 1;
        }
    }
}
console.log("Maxium distnace for aggressive cows=", getMaxDistance(arr, length, cows));

//optimal -> time=O(nlogn)*O()
function getMaxDistance2(arr, length, cows) {
    let low = 1;
    let high = arr[length - 1] - arr[0];
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let value = isPossible(arr, mid, cows);
        if (value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}

console.log("Maxium distnace for aggressive cows2=", getMaxDistance2(arr, length, cows));