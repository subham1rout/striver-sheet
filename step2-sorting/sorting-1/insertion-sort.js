const prompt = require("prompt-sync")({ sigint: true });

//input array
const arrlength = parseInt(prompt("Enter array length:"));
let arr = [];
for (let i = 0; i < arrlength; i++) {
    arr.push(parseInt(prompt("Enter number:")));
}

//calling func
insertionSort(arr, arrlength);

//output sorting array
console.log("Sorting of the array:");
for (let i = 0; i < arrlength; i++) {
    console.log(arr[i]);
}

//defining func
function insertionSort(arr, n) {
    for (let i = 0; i <= n - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

//time comlexity=O(n^2) i.e 1+2+3+4+5+...+n= n(n+1)/2 =n^2 (average and worst case)
//time complexity=O(n) i.e for only outer loop n times (best case)

