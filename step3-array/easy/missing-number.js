const prompt = require("prompt-sync")({ sigint: true });

//input arr
let arr = [];
let length = parseInt(prompt("Enter search arr length:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}
let arrlength = parseInt(prompt("Enter actual arr length:"));


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
console.log("missing number is ", findMissingNumber(arr, arrlength));


//better approach -> time complexity=O(n+n) and space complexity=O(n)
function findMissingNumberBetter(arr, n) {
    let hasharr = new Array(n + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hasharr[arr[i]] = 1;
    }
    for (let i = 1; i <= n; i++) {
        if (hasharr[i] == 0) return i;
    }

}
console.log("missing number from better approach is ", findMissingNumberBetter(arr, arrlength));


//optimal approach -> time complexity=O(n) and space complexity=O(1)
function findMissingNumberOptimal(arr, n) {
    let sum = n * (n + 1) / 2;
    let arrsum = 0;
    for (let i = 0; i < length; i++) {
        arrsum += arr[i];
    }
    return sum - arrsum;
}
console.log("missing number from optimal approach is ", findMissingNumberOptimal(arr, arrlength));


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
console.log("missing number from xor approach is ", findMissingNumberXOR(arr, arrlength));


//revision-1
//brute -> time=O(n^2) and space=O(1)
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

//brute -> time=O(n^2) and space=O(1)
function missingNumber2(arr, n) {
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) return i;
    }
}
console.log("missing number from the array is ", missingNumber2(arr, arrlength));

//better -> time=O(2n) and space=O(n)
function missingNumber3(arr, n) {
    let hasharr = new Array(n + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hasharr[arr[i]] = 1;
    }
    for (let i = 1; i <= n; i++) {
        if (hasharr[i] == 0) {
            return i;
        }
    }
}
console.log("missing number from the array is ", missingNumber3(arr, arrlength));

//optimal -> time=O(n) and space=O(1)
function missingNumber4(arr, n) {
    let sum = Math.floor(n * (n + 1) / 2);
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    return sum - sum1;
}
console.log("missing number from the array is ", missingNumber4(arr, arrlength));

//most optimal -> time=O(n) and space=O(1) it's better as for larger number 10^5, sum will be 10^10 so we have to used bigger datatype
function missingNumber5(arr, n) {
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < arr.length; i++) {
        xor1 = xor1 ^ (i + 1);
        xor2 = xor2 ^ arr[i];
    }
    xor1 = xor1 ^ n;
    return xor1 ^ xor2;
}
console.log("missing number from the array is ", missingNumber5(arr, arrlength));