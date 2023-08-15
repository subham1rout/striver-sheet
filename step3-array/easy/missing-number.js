const prompt = require("prompt-sync")({ sigint: true });

//input arr
let arr = [];
let length = parseInt(prompt("Enter search arr length:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}
let arrlength = parseInt(prompt("Enter actual arr length:"));
console.log("Array is", arr, " and Actual array length is ", arrlength);



//brute force approach -> time complexity=O(n*n) and space complexity=O(1)
function findMissingNumber(arr, n) {
    for (let i = 1; i <= n; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) return i;
    }
}

let missingnum = findMissingNumber(arr, arrlength);
console.log("missing number is ", missingnum);


//better approach -> time complexity=O(n+n) and space complexity=O(n)
function findMissingNumberBetter(arr, n) {
    let hasharr = new Array(n).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hasharr[arr[i]] = 1;
    }
    for (let i = 1; i < n; i++) {
        if (hasharr[i] == 0) return i;
    }

}

let missingnumBetter = findMissingNumberBetter(arr, arrlength);
console.log("missing number from better approach is ", missingnumBetter);


//optimal approach -> time complexity=O(n) and space complexity=O(1)
function findMissingNumberOptimal(arr, n) {
    let sum = n * (n + 1) / 2;
    let arrsum = 0;
    for (let i = 0; i < length; i++) {
        arrsum += arr[i];
    }
    return sum - arrsum;
}

let missingnumOptimal = findMissingNumberOptimal(arr, arrlength);
console.log("missing number from optimal approach is ", missingnumOptimal);


//XOR approach -> better time and space from above time=O(n) and space=O(1)
function findMissingNumberXOR(arr, n) {
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < arr.length; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i + 1);
    }
    xor1 = xor1 ^ n;
    return xor1 ^ xor2;
}

let missingnumXOR = findMissingNumberXOR(arr, arrlength);
console.log("missing number from xor approach is ", missingnumXOR);


//revision-1
function missingNumber1(arr, n) {
    for (let i = 1; i <= n; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) return i;
    }
}

console.log("missing number from the array is ", missingNumber1(arr, arrlength));