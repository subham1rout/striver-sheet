const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//brute force -> time complexity=O(nlogn+n) and space complexity=O(n)
function removeDuplicatesSortedArray(arr) {
    let set = new Set();
    for (let i of arr) {
        set.add(i);
    }
    let count = 0;
    for (let i of set) {
        arr[count] = i;
        count++;
    }
    return count;
}

//optimal approach -> time complexity=O(n) and space complexity=O(1)
function removeDuplicatesSortedArrayOptimal(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    return i + 1;
}

//output
// let count = removeDuplicatesSortedArray(arr);
let count = removeDuplicatesSortedArrayOptimal(arr);
console.log("output of the array:");
for (let i = 0; i < count; i++) {
    console.log(arr[i]);
}


//revision-1
//brute -> time=O(nlogn+n) and space=O(n)
function removeDuplicates1(arr, n) {
    const set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(arr[i]);
    }
    let index = 0;
    for (let i of set) {
        arr[index] = i;
        index++;
    }
    return index;
}
console.log("Unique elements=", removeDuplicates1(arr, length));
console.log("Array is ", arr);

//optimal -> time=O(n) and space=O(1)
function removeDuplicates2(arr, n) {
    let i = 0;
    for (let k = 1; k < n; k++) {
        if (arr[k] != arr[i]) {
            arr[i + 1] = arr[k];
            i++;
        }
    }
    return i + 1;
}
console.log("Unique elements optimal=", removeDuplicates2(arr, length));
console.log("Array is ", arr);