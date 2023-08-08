const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function -> time=O(n) and space=O(n) and extra space used to solve the problem=O(1)
function leftRotateOnePlace(arr) {
    let temp = arr[0];
    for (let i = 0; i <= arr.length - 2; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}

//output
console.log("After left rotation one place array: ", leftRotateOnePlace(arr));

//defining function -> time=O(n) and space=O(n) and extra space used to solve the problem=O(1)
function rightRotateOnePlace(arr) {
    let rightend = arr[length - 1];
    for (let i = length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = rightend;
    return arr;
}

//output
console.log("After right rotation one place, array: ", rightRotateOnePlace(arr));


//revision-1
function leftRotateOnePlace1(arr, n) {
    let first = arr[0];
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }
    arr[n - 1] = first;
    return arr;
}
console.log("After left rotation one place array: ", leftRotateOnePlace1(arr, length));

function rightRotateOnePlace1(arr, n) {
    let temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}
console.log("After right rotation one place, array: ", rightRotateOnePlace1(arr, length));