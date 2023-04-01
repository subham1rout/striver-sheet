const prompt = require("prompt-sync")({ sigint: true });

//take input
const length = parseInt(prompt("Enter the length of the array: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number: ")));
}

//defining function
//brute force
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

//output
moveZeroToEnd(arr);
console.log(`Array after moving zeros to end - ${arr}`);