const prompt = require("prompt-sync")({ sigint: true });

//take input
const length = parseInt(prompt("Enter the length of the array: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number: ")));
}

//defining function
//brute force -> time complexity=O(n)+O(d)+O(n-d)=O(2n) and space complexity=O(n)
function moveZeroToEnd(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0)
            temp.push(arr[i]);
    }
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    for (let i = temp.length; i < arr.length; i++) {
        arr[i] = 0;
    }
}
moveZeroToEnd(arr);
console.log(`Array after moving zeros to end - ${arr}`);

//optimal -> time complexity=O(x)+O(n-x)=O(n) and space complexity=O(1)
function moveZeroToEndOptimal(arr) {
    let firstzero = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            firstzero = i;
            break;
        }
    }
    if (firstzero == -1) {
        return;
    }
    for (let i = firstzero + 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            let temp = arr[i];
            arr[i] = arr[firstzero];
            arr[firstzero] = temp;
            firstzero++;
        }
    }
}
moveZeroToEndOptimal(arr);
console.log(`Array after moving zeros to end - ${arr}`);


//revision-1
//brute -> time=O(2n) and space=O(n)
function moveZeroToEnd1(arr, n) {
    let temp = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] != 0) temp.push(arr[i]);
    }
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    for (let i = temp.length; i < n; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log("After moving zero to end, Array is", moveZeroToEnd1(arr, length));

//optimal -> time=O(n) and space=O(1)
function moveZeroToEndOptimal1(arr, n) {
    let j = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            j = i;
            break;
        }
    }
    if (j == -1) return arr;
    for (let i = j + 1; i < n; i++) {
        if (arr[i] != 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}
console.log("After moving zero to end, Array is", moveZeroToEndOptimal1(arr, length));