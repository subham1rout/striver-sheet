const prompt = require('prompt-sync')({ sigint: true });

//take input
let arr = [];
const length = parseInt(prompt("Enter the length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}

//brute force
/*

1. Generate all the permutation
2. Do a linear search for the given array
3. Next index will be the next permutation

if arr.length=n then permuation=n!;
time=n!*n

*/

//optimal solution -> time=O(3n) and space=O(1)

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
function nextPermutation(arr) {
    let n = arr.length;
    let index = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return reverse(arr, 0, n - 1);
    }
    for (let i = n - 1; i > index; i--) {
        if (arr[i] > arr[index]) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            break;
        }
    }
    return reverse(arr, index + 1, n - 1);
}

// console.log(`Next pemutation for the array [ ${arr} ] is [ ${nextPermutation(arr)} ]`);


//revision-1
//optimal -> time=O(3n) and space=O(1)
function reverse1(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    console.log(arr);
    return arr;
}
function nextPermutation1(arr, n) {
    let index = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return reverse1(arr, 0, n - 1);
    }
    console.log(arr);
    for (let i = n - 1; i >= index; i--) {
        if (arr[i] > arr[index]) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            break;
        }
    }
    return reverse1(arr, index + 1, n - 1);
}
console.log(`Next pemutation1 for the array [ ${arr} ] is [ ${nextPermutation1(arr, length)} ]`);