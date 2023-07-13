//user input
const prompt = require('prompt-sync')({ sigint: true });
const size = prompt('Enter size of the array: ');
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = prompt("Enter element: ");
}
console.log("Input array is ", arr);


//using loop -> time complexity=O(n) and space complexity=O(n)
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let i = arr[start];
        arr[start] = arr[end];
        arr[end] = i;
        start++;
        end--;
    }
    return arr;
}
let newArr = reverseArray(arr);
console.log("Reverse of array: ", newArr);


//using recursion
function reverseArray2(arr, l, r) {
    if (l >= r) return;
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    reverseArray2(arr, l + 1, r - 1);
}

reverseArray2(arr, 0, arr.length - 1);
console.log("Now the new array is ", arr);


//using single parameter
function reverseArray3(arr, i) {
    if (i >= arr.length / 2) {
        return;
    }
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - i - 1] = temp;
    reverseArray3(arr, i + 1);
}

reverseArray3(arr, 0);
console.log("Now the new array using one varible is ", arr);


//reverse a number
const number = parseInt(prompt("enter the number:"));
let revno = 0;
function reverseNumber(n) {
    if (n == 0) return;
    revno = revno * 10 + (n % 10);
    reverseNumber(Math.floor(n / 10));
}

reverseNumber(number);
console.log("Reverse number of the given number is ", revno);