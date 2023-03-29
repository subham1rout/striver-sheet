const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function
function leftRotateOnePlace(arr) {
    let temp = arr[0];
    for (let i = 0; i <= arr.length - 2; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
}

//output
leftRotateOnePlace(arr);
console.log("After left rotation one place array: ", arr);

//time complexity=O(n) and space complexity of algorithm=O(n) and extra space used to solve the problem=O(1)