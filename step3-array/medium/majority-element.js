const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//brute force -> time=o(n^2) and space=O(1)
function majorityElement(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > n / 2) {
            return arr[i];
        }
    }
    return -1;
}

let element = majorityElement(arr);
console.log("Majority element from the array is ", element);

//better approach -> time=O(3n) and space=O(n)
function majorityElementHashing(arr) {
    let n = arr.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(arr[i], 0);
    }
    for (let i = 0; i < n; i++) {
        let value = map.get(arr[i]);
        value++;
        map.set(arr[i], value);
    }
    for (let [key, value] of map) {
        if (value > n / 2) {
            return key;
        }
    }
    return -1;
}

let element1 = majorityElementHashing(arr);
console.log("Majority element from the array is ", element1);

//Moore's Voting Algorithm -> optimal solution -> time=O(n) and space=O(1)
function getMajorityElement(arr) {
    let el;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count == 0) {
            el = arr[i];
            count = 1;
        } else if (arr[i] == el) {
            count++;
        } else {
            count--;
        }
    }
    let count1 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            count1++;
        }
    }
    if (count1 > arr.length / 2) {
        return el;
    }
    return -1;
}

let majority = getMajorityElement(arr);
console.log("Majority element from the array is ", majority);