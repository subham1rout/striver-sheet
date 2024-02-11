const prompt = require("prompt-sync")({ sigint: true });
const length = parseInt(prompt("enter the length of the array:"));

let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the value:")));
}

//time=O(logn) and space=O(1)
function timesArrRotated(arr, n) {
    let low = 0;
    let high = n - 1;
    let min = Number.MAX_SAFE_INTEGER;
    let minindex = -1;
    if(arr[low]<=arr[high]){
        return low;
    }
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[low]<=arr[mid]){
            if(arr[low]<min){
                min=arr[low];
                minindex=low;
            }
            low=mid+1;
        }else{
            if(arr[mid]<min){
                min=arr[mid];
                minindex=mid;
            }
            high=mid-1;
        }
    }
    return minindex;
}
console.log("No of times array had been roatated",timesArrRotated(arr,length));