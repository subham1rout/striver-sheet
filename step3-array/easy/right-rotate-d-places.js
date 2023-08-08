const prompt = require("prompt-sync")({ sigint: true });

//take input
const length = parseInt(prompt("Enter the length of the array: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number: ")));
}

//brute-> //time complexity=O(d)+O(n-d)+O(d)=O(d+n-d+d)=O(d+n) and space complexity=O(d)
function rightRotateDPlaces(arr, length, D) {
    D = D % length;
    //push to temporary array
    let temp = [];
    for (let i = length - D; i < length; i++) {
        temp.push(arr[i]);
    }
    //shift the element to right
    for (let i = length - 1; i >= D; i--) {
        arr[i] = arr[i - D];
    }
    //move temp value to arr
    for (let i = 0; i < D; i++) {
        arr[i] = temp[i];
    }
    return arr;
}
let D = parseInt(prompt("How many right places you want to rotate: "));
console.log(`Array after rotating ${D} places from right : `, rightRotateDPlaces(arr, length, D));


//optimal solution -> time complexity=O(n-d)+O(d)+O(n)=O(2n) and space complexity=O(1)
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function rightRotateDPlacesOptimal(arr, n, d) {
    d = d % n;
    reverse(arr, 0, n - 1 - d);
    reverse(arr, n - d, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
}
let D1 = parseInt(prompt("How many right places you want to rotate: "));
console.log(`Array after rotating ${D} places from right : `, rightRotateDPlacesOptimal(arr, length, D1));


//revision-1
// brute -> time =O(n+k) and space=O(k)
function rightRotate(arr, n, k) {
    k = k % n;
    let temp = [];
    for (let i = n - k; i < n; i++) {
        temp.push(arr[i]);
    }
    for (let i = n - 1; i >= k; i--) {
        arr[i] = arr[i - k];
    }
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    return arr;
}
let k = parseInt(prompt("enter no of right rotation:"));
console.log("After right rotate array ->", rightRotate(arr, length, k));

//optimal -> time=O(2n) and space=o(1)
function reverse1(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function rightRotate1(arr, n, k) {
    k = k % n;
    reverse1(arr, 0, n - k - 1);
    reverse1(arr, n - k, n - 1);
    reverse1(arr, 0, n - 1);
    return arr;
}
let k1 = parseInt(prompt("enter no of right rotation:"));
console.log("After right rotate array ->", rightRotate1(arr, length, k1));