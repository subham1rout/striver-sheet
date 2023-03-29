const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function
function rightRotateOnePlace(arr) {
    let rightend = arr[length - 1];
    for (let i = length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = rightend;
}

//output
rightRotateOnePlace(arr);
console.log("After right rotation one place, array: ", arr);

//time complexity=O(n) and space complexity of algorithm=O(n) and extra space used to solve the problem=O(1)