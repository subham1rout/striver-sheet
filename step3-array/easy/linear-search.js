const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function
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
let resultindex = linearSearch(arr, value); //time complexity=O(n) and space complexity=O(1)
console.log(`${value} present in index= ${resultindex}`);