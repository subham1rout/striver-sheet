const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//brute force -> time=O(nlogn) and space=O(n)
function sortArr(arr1) {
    arr1.sort();
}

sortArr(arr);
console.log(`Sorted array brute is ${arr}`);

//better solution -> time=O(2n) and space=O(1)
function sortArray1(arr) {
    let n = arr.length;
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            count0++;
        } else if (arr[i] == 1) {
            count1++;
        } else {
            count2++;
        }
    }
    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }
    for (let i = count0; i < count0 + count1; i++) {
        arr[i] = 1;
    }
    for (let j = count0 + count1; j < n; j++) {
        arr[j] = 2;
    }
    return arr;
}

sortArray1(arr);
console.log(`Sorted array better is ${arr}`);

//optimal solution -> time=O(n) and space= O(1)
function sortArrOptimal(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            let temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            mid++;
            low++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            let temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;
            high--;
        }
    }
}

sortArrOptimal(arr);
console.log("Sorted array optimal is", arr);


//revision-1
//brute -> time=o(nlogn) and space=o(n)
//using merge sort

//better -> time=O(2n) and space=O(1)
function sort(arr, n) {
    let countzero = 0;
    let countone = 0;
    let counttwo = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) countzero++;
        else if (arr[i] == 1) countone++;
        else counttwo++;
    }
    for (let i = 0; i < countzero; i++) {
        arr[i] = 0;
    }
    for (let i = countzero; i < countzero + countone; i++) {
        arr[i] = 1;
    }
    for (let i = countzero + countone; i < countzero + countone + counttwo; i++) {
        arr[i] = 2;
    }
    return arr;
}
console.log("Sort Result ->", sort(arr, length));

//optimal -> Dutch National Flag Alg -> time=O(n) and space=O(1)
function sortDNF(arr, n) {
    let low = 0;
    let mid = 0;
    let high = n - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}
console.log("Sort Result ->", sortDNF(arr, length));