const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}

//brute _> time=O(n) and space=O(1)
function searchSingleElement(arr, n) {
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            if (arr[i] != arr[i + 1]) return arr[i];
        } else if (i == n - 1) {
            if (arr[n - 1] != arr[n - 2]) return arr[n - 1];
        } else {
            if (arr[i] != arr[i + 1] && arr[i] !== arr[i - 1]) {
                return arr[i];
            }
        }
    }
}
console.log("Single Element is ", searchSingleElement(arr, length));

//optimal -> time=O(logn) and space=O(1)
function searchSingleElement2(arr, n) {
    if(n==1) return arr[0];
    if (arr[0] != arr[1]) return arr[0];
    if (arr[n - 1] != arr[n - 2]) return arr[n - 1];
    let low = 1;
    let high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
            return arr[mid];
        }
        if((mid%2==1 && arr[mid-1]==arr[mid]) || (mid%2==0 && arr[mid+1]==arr[mid])){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}
console.log("Single Element2 is ", searchSingleElement2(arr, length));