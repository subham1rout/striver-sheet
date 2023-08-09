const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function -> time complexity=O(n) and space complexity=O(1)
function linearSearch(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            return i;
        }
    }
    return -1;
}

//output
let value = parseInt(prompt("Enter number to search:"));
console.log(`value present in index= ${linearSearch(arr, value)}`);


//revision-1 ->time=O(n) and space=O(1)
function linearSearch1(arr, length, k) {
    for (let i = 0; i < length; i++) {
        if (arr[i] == k) return i;
    }
    return -1;
}
let value1 = parseInt(prompt("Enter value to search:"));
console.log("Value present in index=", linearSearch1(arr, length, value1));