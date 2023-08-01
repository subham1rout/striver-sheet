const prompt = require("prompt-sync")({ sigint: true });

//input array
const arrlength = parseInt(prompt("Enter array length:"));
let arr = [];
for (let i = 0; i < arrlength; i++) {
    arr.push(parseInt(prompt("Enter number:")));
}

//calling func
bubbleSortRecursive(arr, arrlength);

//printing output
console.log("Sorting of arr:");
for (let i = 0; i < arrlength; i++) {
    console.log(arr[i]);
}

//defining func
function bubbleSortRecursive(arr, n) {
    if (n == 1) {
        return 1;
    }
    for (let i = 0; i <= n - 2; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    bubbleSortRecursive(arr, n - 1);
}

//time complexity= O(n^2) (average case, worst case)
//time complexity= O(n) (best case)



//revision-1
const length1 = parseInt(prompt('enter the length:'));
const arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt('enter the number:')));
}

function bubbleSortRecursive1(arr, n) {
    if (n == 1) return;
    for (let i = 0; i <= n - 2; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return bubbleSortRecursive1(arr, n - 1);
}

bubbleSortRecursive1(arr1, length1);
console.log(arr1);