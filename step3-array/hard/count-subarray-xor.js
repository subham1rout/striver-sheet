const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}
let k = parseInt(prompt("enter the value of k= "));

//brute -> time=O(n^3) and space=o(1)
function countXORSubarray(arr, length, k) {
    let count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let xor = 0;
            for (let l = i; l <= j; l++) {
                xor = xor ^ arr[l];
            }
            if (xor == k) {
                count++;
            }
        }
    }
    return count;
}
console.log(`Subarray Count having XOR ${k} = ${countXORSubarray(arr, length, k)}`);

//brute -> time=O(n^2) and space=o(1)
function countXORSubarray1(arr, length, k) {
    let count = 0;
    for (let i = 0; i < length; i++) {
        let xor = 0;
        for (let j = i; j < length; j++) {
            xor = xor ^ arr[j];
            if (xor == k) {
                count++;
            }
        }
    }
    return count;
}
console.log(`Subarray Count1 having XOR ${k} = ${countXORSubarray1(arr, length, k)}`);

//optimal -> time=O(nlogn) and space=o(n)
function countXORSubarray2(arr, length, k) {
    let count = 0;
    let map = new Map();
    map.set(0, 1);
    let xor = 0;
    for (let i = 0; i < length; i++) {
        xor = xor ^ arr[i];
        let x = xor ^ k;
        let value = map.get(x);
        if (value) {
            count = count + value;
        }
        if (map.get(xor)) {
            map.set(xor, map.get(xor) + 1);
        } else {
            map.set(xor, 1);
        }
    }
    return count;
}
console.log(`Subarray Count2 having XOR ${k} = ${countXORSubarray2(arr, length, k)}`);