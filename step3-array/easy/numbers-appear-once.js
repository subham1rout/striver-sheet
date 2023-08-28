const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = Number.parseInt(prompt("enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(Number.parseInt(prompt("enter number:")));
}

//brute force approach -> time =O(n^2) and space= O(1)
function getNumberAppearOnce(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count == 1) return arr[i];
    }
    return -1;
}
console.log(`Number appear once from the array [ ${arr} ] is ${getNumberAppearOnce(arr)}`);

//better approach -> time= O(3n) and space=O(n)
function getNumberAppearOnceBetter(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let hasharr = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hasharr[arr[i]]++;
    }
    for (let i = 1; i <= hasharr.length; i++) {
        if (hasharr[i] == 1) {
            return i;
        }
    }
}
console.log(`Number appear once from the array in better solution [ ${arr} ] is ${getNumberAppearOnceBetter(arr)}`);

//using map -> time= o(n/2+1) and space = O(n/2+1)
function getNumberAppearOnceUsingMap(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let map = new Map();
    for (let i = 0; i < max + 1; i++) {
        map.set(i, 0);
    }
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let temp1 = map.get(temp);
        temp1++;
        map.set(temp, temp1);
    }
    for (let [key, value] of map) {
        if (value == 1) {
            return key;
        }
    }
}
console.log(`Number appear once from the array using map [ ${arr} ] is ${getNumberAppearOnceUsingMap(arr)}`);

//optimal approach -> time=O(n) and space = O(1)
function getNumberAppearOnceOptimal(arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}
console.log(`Number appear once from the array using optimal approach [ ${arr} ] is ${getNumberAppearOnceOptimal(arr)}`);


//revision-1
//brute -> time=O(n^2) and space=O(1)
function findNumber(arr, n) {
    let count = 0;
    let num;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count == 1) {
            num = arr[i];
            break;
        }
        count = 0;
    }
    return num;
}
console.log("Number appear once is", findNumber(arr, length));