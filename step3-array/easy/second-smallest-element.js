const prompt = require("prompt-sync")({ sigint: true });

//input
const arr = [];
const length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining func
function getSecondSmallest(arr) {

    /*optimal soultion*/
    let smallest = arr[0];
    let ssmallest = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            ssmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < ssmallest) {
            ssmallest = arr[i];
        }
    }
    return ssmallest;
}

//output
let secondSmallest = getSecondSmallest(arr);
console.log("Second smallest element from the array :", secondSmallest);

//time complexity=O(n)