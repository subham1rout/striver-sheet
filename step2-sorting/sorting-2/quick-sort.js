const prompt = require("prompt-sync")({ sigint: true });

//input array
const arrlength = parseInt(prompt("Enter length of array:"));
const arr = [];
for (let i = 0; i < arrlength; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function
class sorting {
    partition(arr, low, high) {
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

    quickSort(arr, low, high) {
        if (low < high) {
            //this function put the pivot to it's actual position and move all small into left & greater into right and return the position of pivot.
            let partitionIndex = this.partition(arr, low, high);
            this.quickSort(arr, low, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, high);
        }
    }
}


//calling function
let obj = new sorting();
obj.quickSort(arr, 0, arrlength - 1);

//output
console.log("Sorting of the array->");
for (let i = 0; i < arrlength; i++) {
    console.log(arr[i]);
}

//time complexity=O(nlogn)
//space complexity=O(1)


//revision-1

const arrlength1 = parseInt(prompt("enter the length of the array:"));
const arr1 = [];
for (let i = 0; i < arrlength1; i++) {
    arr1.push(parseInt(prompt("enter the number:")));
}

function partition1(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) i++;
        while (arr[j] > pivot && j >= low - 1) j--;
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

function qS(arr, low, high) {
    if (low < high) {
        let partitionIndex1 = partition1(arr, low, high);
        qS(arr, low, partitionIndex1 - 1);
        qS(arr, partitionIndex1 + 1, high);
    }
}

function quickSort1(arr, n) {
    return qS(arr, 0, n - 1);
}


quickSort1(arr1, arrlength1);
console.log(arr1);