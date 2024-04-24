const prompt = require("prompt-sync")({ sigint: true });

const n1 = parseInt(prompt("Enter the length of the arr:"));
const arr1 = [];
for (let i = 0; i < n1; i++) {
    arr1.push(parseInt(prompt("enter the number:")));
}

const n2 = parseInt(prompt("Enter the length of the arr2:"));
const arr2 = [];
for (let i = 0; i < n2; i++) {
    arr2.push(parseInt(prompt("enter the number:")));
}

//brute -> time=O(n1+n2) and space=O(n1+n2)
function getMedian(arr1, n1, arr2, n2) {
    let i = 0;
    let j = 0;
    let arr3 = [];
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i++]);
        } else {
            arr3.push(arr2[j++]);
        }
    }
    while (i < n1) {
        arr3.push(arr1[i++]);
    }
    while (j < n2) {
        arr3.push(arr2[j++]);
    }
    let n = n1 + n2;
    if (n % 2 == 1) {
        return arr3[Math.floor(n / 2)];
    } else {
        return (arr3[n / 2] + arr3[(n / 2) - 1]) / 2;
    }
}
console.log("Median of 2 sorted array is ", getMedian(arr1, n1, arr2, n2));