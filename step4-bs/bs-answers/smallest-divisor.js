const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}

const limit = parseInt(prompt("enter the limit:"));

//brute -> time=max(arr)*O(n) and space=O(1)
function getMax(arr, n) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function getSum(arr, n, div) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(arr[i] / div);
    }
    return sum;
}
function getSmallestDivisor(arr, n, limit) {
    if (n > limit) return -1;
    let max = getMax(arr, n);
    for (let i = 1; i <= max; i++) {
        let sum = getSum(arr, n, i);
        if (sum <= limit) {
            return i;
        }
    }
}
console.log("Smallest Divisor =",getSmallestDivisor(arr,length,limit));

//optimal -> time=max(arr)*O(logn) and space=O(1)
function getSmallestDivisor2(arr,n,limit){
    let low=1;
    let high=getMax(arr,n);
    let ans=-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let sum=getSum(arr,n,mid);
        if(sum<=limit){
            ans=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans;
}
console.log("Smallest Divisor1 =",getSmallestDivisor2(arr,length,limit));