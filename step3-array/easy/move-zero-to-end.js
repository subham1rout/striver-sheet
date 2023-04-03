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

//optimal solution
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

//output
// moveZeroToEnd(arr); //time complexity=O(n)+O(d)+O(n-d)=O(2n) and space complexity=O(n)
moveZeroToEndOptimal(arr);  //time complexity=O(x)+O(n-x)=O(n) and space complexity=O(1)

console.log(`Array after moving zeros to end - ${arr}`);