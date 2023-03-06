const prompt = require("prompt-sync")({ sigint: true });

//problem input
const length = parseInt(prompt("Enter length of array you sort:"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter number:")));
}
//calling func
bubbleSort(arr, length);

//printing output
console.log("Sorting of arr:");
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}

//defining function
function bubbleSort(arr, n) {
    let swapDid = 0;
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapDid = 1;
            }
        }
        if (swapDid == 0) {
            break;
        }
    }
}

//time complexity= O(n^2) i.e n+ n-1 + n-2 + n-3 + n-4 +......+1=n(n+1)/2 =n^2  (average case, worst case)
//time complexity= O(n) i.e if in first try swaping not happening just get out of loop (best case)