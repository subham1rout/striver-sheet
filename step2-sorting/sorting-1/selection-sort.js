const prompt = require("prompt-sync")({ sigint: true });

//problem input
// const length = parseInt(prompt("Enter length of array you sort:"));
// let arr = [];
// for (let i = 0; i < length; i++) {
//     arr.push(parseInt(prompt("Enter number:")));
// }
//calling func
// selectionSort(arr, length);

//printing output
// console.log("Sorting of arr:");
// for (let i = 0; i < length; i++) {
//     console.log(arr[i]);
// }

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

//time complexity= O(n^2) (best case,average case, worst case)


//revision-1
let length1 = parseInt(prompt('enter the no of elements:'));
const arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt('enter the number:')));
}

function selectionSort1(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        let min = i;
        for (let j = i; j <= n - 1; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log("sorted array=", arr);
}

selectionSort1(length1, arr1);