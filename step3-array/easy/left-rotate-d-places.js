const prompt = require("prompt-sync")({ sigint: true });

//take input
const length = parseInt(prompt("Enter the length of the array: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number: ")));
}

//defining function(brute force)
function leftRotateDPlaces(arr, length, D) {
    D = D % length;
    //push to temporary array
    let temp = [];
    for (let i = 0; i < D; i++) {
        temp.push(arr[i]);
    }
    //shift the element
    for (let i = D; i < length; i++) {
        arr[i - D] = arr[i];
    }
    //move the temp to arr

    // without using j
    for (let i = length - D; i < length; i++) {
        arr[i] = temp[i - (length - D)];
    }
    // let j = 0;
    // for (let i = length - D; i < length; i++) {
    //     arr[i] = temp[j];
    //     j++;
    // }
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
function leftRotateDPlacesOptimal(arr, l, d) {
    d = d % l;
    reverse(arr, 0, d - 1);
    reverse(arr, d, l - 1);
    reverse(arr, 0, l - 1);
}

//output
let D = parseInt(prompt("How many left places you want to rotate: "));
// leftRotateDPlaces(arr, length, D);    //time complexity=O(d)+O(n-d)+O(d)=O(d+n-d+d)=O(d+n) and space complexity=O(d)
leftRotateDPlacesOptimal(arr, length, D);  //time coplexity=O(d)+O(l-d)+O(l)=O(2l)=O(2n) and space complexity=O(1)
console.log(`Array after rotating ${D} places : `, arr);