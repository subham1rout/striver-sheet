const prompt = require("prompt-sync")({ sigint: true });

//input array
const length = parseInt(prompt("Enter array length:"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter number:")));
}

//calling func
insertionSortRecursive(arr, length);

//printing output
console.log("Sorting of arr:");
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}

//defining func
function insertionSortRecursive(arr, n) {
    if (n <= 0) {
        return 1;
    }
    insertionSortRecursive(arr, n - 1);
    while (n - 1 >= 0 && arr[n - 1] > arr[n]) {
        let temp = arr[n - 1];
        arr[n - 1] = arr[n];
        arr[n] = temp;
        n--;
    }
}

//time comlexity=O(n^2) (average and worst case)
//time complexity=O(n) (best case)
