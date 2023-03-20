const prompt = require("prompt-sync")({ sigint: true });

//input array
const length = parseInt(prompt("enter array length: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number: ")));
}

//defining function
function findGretest(arr) {
    let max = arr[0];
    for (let i = 0; i < length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//output
let gretest = findGretest(arr);
console.log("Gretest number from array is", gretest);

//time complexity=O(n)
//space complexity=O(1)