const prompt = require("prompt-sync")({ sigint: true });

//take input
const length = parseInt(prompt("Enter the length of the array: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number: ")));
}

//defining function(brute force)
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
}

//optimal solution
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
}
//output
let D = parseInt(prompt("How many right places you want to rotate: "));
// rightRotateDPlaces(arr, length, D);   //time complexity=O(d)+O(n-d)+O(d)=O(d+n-d+d)=O(d+n) and space complexity=O(d)
rightRotateDPlacesOptimal(arr, length, D);  //time complexity=O(n-d)+O(d)+O(n)=O(2n) and space complexity=O(1)
console.log(`Array after rotating ${D} places from right : `, arr);
