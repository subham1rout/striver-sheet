const prompt = require("prompt-sync")({ sigint: true });

//input
const arr = [];
const length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining func
function getSecondLargest(arr) {

    /*brute force soultion*/
    // quickSort(arr, 0, length - 1);
    // let max = arr[length - 1];
    // for (let i = length - 2; i >= 0; i--) {
    //     if (arr[i] !== max) {
    //         return arr[i];
    //     }
    // }
    //time complexity=O(nlogn+n)

    /*better approach*/
    // let largest = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > largest) {
    //         largest = arr[i];
    //     }
    // }
    // let secondLargest = -1;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > secondLargest && arr[i] != largest) {
    //         secondLargest = arr[i];
    //     }
    // }
    // return secondLargest;
    //time complexity=O(2n)

    /*optimal soultion*/
    let largest = arr[0];
    let slargest = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            slargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > slargest) {
            slargest = arr[i];
        }
    }
    return slargest;
    //time complexity=O(n)
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {

        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}

//output
let secondLargest = getSecondLargest(arr);
console.log("Second largest element from the array :", secondLargest);