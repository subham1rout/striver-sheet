const prompt = require("prompt-sync")({ sigint: true });
const target = parseInt(prompt("enter target for the array:"));

//brute -> time=O(n) and space=O(1)
function findSquareRoot(target) {
    let ans = 1;
    for (let i = 1; i <= target; i++) {
        if (i * i <= target) {
            ans = i;
        }
    }
    return ans;
}
console.log("Square Root=", findSquareRoot(target));

//optimal -> time=O(logn) and space=O(1)
function findSquareRoot2(target) {
    let low = 1;
    let high = target;
    let ans = 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid <= target) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}
console.log("Square Root1=", findSquareRoot2(target));