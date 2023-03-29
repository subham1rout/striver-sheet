const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//defining function (brute force)
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
//time complexity=O(nlogn+n) and space complexity=O(n)

//optimal approach
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
//time complexity=O(n) and space complexity=O(1)


//output
// let count = removeDuplicatesSortedArray(arr);
let count = removeDuplicatesSortedArrayOptimal(arr);
console.log("output of the array:");
for (let i = 0; i < count; i++) {
    console.log(arr[i]);
}
