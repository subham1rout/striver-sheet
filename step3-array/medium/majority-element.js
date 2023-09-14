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
// console.log("Majority element from the array is ", majorityElement(arr));

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
// console.log("Majority element from the array is ", majorityElementHashing(arr));

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
// console.log("Majority element from the array is ", getMajorityElement(arr));


//revision-1
//brute -> time=O(n^2) and space=O(1)
function majority(arr, n) {
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > Math.floor(n / 2)) {
            return arr[i];
        }
    }
}
console.log("Majority Element -> ", majority(arr, length));

//better -> time=O(nlogn)+O(n) and space=O(n)
function majority1(arr, n) {
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            let value = map.get(arr[i]);
            map.set(arr[i], value + 1);
        }
    }
    for (const [key, value] of map) {
        if (value > Math.floor(n / 2)) {
            return key;
        }
    }
    return -1;
}
console.log("Majority Element -> ", majority1(arr, length));

// optimal -> time=O(n) and space=O(1) -> Moore's Voting Algorithm
function majority2(arr, n) {
    let el;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (count == 0) {
            count = 1;
            el = arr[i];
        } else if (el == arr[i]) count++;
        else count--;
    }
    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (el == arr[i]) count1++;
    }
    if (count1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}
console.log("Majority Element -> ", majority2(arr, length));