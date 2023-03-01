const prompt = require("prompt-sync")({ sigint: true });

//problem input
const length = parseInt(prompt("Enter length of array you sort:"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter number:")));
}
//calling func
selectionSort(arr, length);

//printing output
console.log("Sorting of arr:");
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}

//defining function
function selectionSort(arr, n) {
    for (let i = 0; i <= n - 2; i++) {
        let min = i;
        for (let j = i; j <= n - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

//time complexity= O(n*2);