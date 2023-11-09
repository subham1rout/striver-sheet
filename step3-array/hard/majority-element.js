const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}

//brute force -> time=O(2n) and space=O(n)
function findMajority(arr, n) {
    const map = new Map();
    for (let i = 0; i < n; i++) {
        let value = map.get(arr[i]);
        if (value == undefined) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], value + 1);
        }
    }
    let res = [];
    for (let key of map.keys()) {
        if (map.get(key) > (n / 3)) {
            res.push(key);
        }
    }
    return res;
}
console.log("Majority element >n/3 is ", findMajority(arr, length));