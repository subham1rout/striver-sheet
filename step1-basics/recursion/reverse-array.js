//user input
const prompt = require('prompt-sync')({ sigint: true });
const size = prompt('Enter size of the array: ');
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = prompt("Enter element: ");
}

//logic
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

//time complexity=O(n) space complexity=O(n)