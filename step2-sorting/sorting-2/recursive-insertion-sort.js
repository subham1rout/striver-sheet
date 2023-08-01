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



//revision-1
const length1 = parseInt(prompt("Enter array length:"));
let arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt("Enter number:")));
}

function insertionSortRecursive1(arr, l, n) {
    if (l > n - 1) return;
    let i = l;
    while (i > 0 && arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        i--;
    }
    return insertionSortRecursive1(arr, l + 1, n);
}

insertionSortRecursive1(arr1, 0, length1);
console.log(arr1);