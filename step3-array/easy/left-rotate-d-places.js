const prompt = require("prompt-sync")({ sigint: true });

//take input
const length = parseInt(prompt("Enter the length of the array: "));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("Enter the number: ")));
}

//defining function(brute force) -> time complexity=O(d)+O(n-d)+O(d)=O(d+n-d+d)=O(d+n) and space complexity=O(d)
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
    return arr;
}

//output
let D = parseInt(prompt("How many left places you want to rotate: "));
console.log(`Array after rotating ${D} places : `, leftRotateDPlaces(arr, length, D));

//optimal solution -> time coplexity=O(d)+O(l-d)+O(l)=O(2l)=O(2n) and space complexity=O(1)
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
    return arr;
}

//output
let D1 = parseInt(prompt("How many left places you want to rotate: "));
console.log(`Array after rotating ${D1} places : `, leftRotateDPlacesOptimal(arr, length, D1));


//revision-1
//brute -> time=O(n+k) and space=O(k)
function leftRotate(arr, n, k) {
    k = k % n;
    let temp = [];
    for (let i = 0; i < k; i++) {
        temp.push(arr[i]);
    }
    for (let i = k; i < n; i++) {
        arr[i - k] = arr[i];
    }
    for (let i = 0; i < temp.length; i++) {
        arr[n - k + i] = temp[i];
    }
    return arr;
}

let k = parseInt(prompt("No of rotation: "));
console.log("After rotation array is ", leftRotate(arr, length, k));

//optimal -> time=O(2n) and space=O(1)
function reverse1(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function leftRotate1(arr, n, k) {
    k = k % n;
    reverse1(arr, 0, k - 1);
    reverse1(arr, k, n - 1);
    reverse1(arr, 0, n - 1);
    return arr;
}
let k1 = parseInt(prompt("No of rotation: "));
console.log("After rotation array is ", leftRotate1(arr, length, k1));