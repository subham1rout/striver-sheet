const prompt = require("prompt-sync")({ sigint: true });

//input array
const length = parseInt(prompt("Enter length of array you sort:"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter number:")));
}
//calling func
mergeSort(arr, 0, length - 1);

//printing output
console.log("Sorting of arr:");
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}

//defining function
function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

//time complexity=O(nlogn);
//space complexity=O(n);

// class Solution {
//     merge(arr, low, mid, high) {
//         let left = low;
//         let right = mid + 1;
//         let temp = [];
//         while (left <= mid && right <= high) {
//             if (arr[left] <= arr[right]) {
//                 temp.push(arr[left]);
//                 left++;
//             } else {
//                 temp.push(arr[right]);
//                 right++;
//             }
//         }
//         while (left <= mid) {
//             temp.push(arr[left]);
//             left++;
//         }
//         while (right <= high) {
//             temp.push(arr[right]);
//             right++;
//         }
//         for (let i = low; i <= high; i++) {
//             arr[i] = temp[i - low];
//         }
//     }

//     mergeSort(arr, l, r) {
//         if (l >= r) {
//             return;
//         }
//         let mid = Math.floor((l + r) / 2);
//         this.mergeSort(arr, l, mid);
//         this.mergeSort(arr, mid + 1, r);
//         this.merge(arr, l, mid, r);
//     }

// }


//revision-1

const arrlength1 = parseInt(prompt('enter the array length:'));
let i = 0;
let arr1 = [];
while (i < arrlength1) {
    arr1.push(parseInt(prompt('enter the number:')));
    i++;
}

function merge1(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return arr;
}

function mS(arr, low, high) {
    if (low == high) return;
    let mid = Math.floor((low + high) / 2);
    mS(arr, low, mid);
    mS(arr, mid + 1, high);
    return merge1(arr, low, mid, high);
}

function mergeSort1(arr, n) {
    return mS(arr, 0, n - 1);
}

let sortedarr = mergeSort1(arr1, arrlength1);
console.log("Sorted array is", sortedarr);