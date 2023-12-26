const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    let start = parseInt(prompt("enter start element:"));
    let end = parseInt(prompt("enter end element:"));
    arr.push([start, end]);
}

//brute -> time=O(nlogn)+O(2n) and space=o(n)
function mergeSubinterval(arr, length) {
    arr.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < length; i++) {
        let start = arr[i][0];
        let end = arr[i][1];
        if (ans.length != 0 && ans[ans.length - 1][1] >= end) {
            continue;
        }
        for (let j = i + 1; j < length; j++) {
            if (arr[j][0] <= end) {
                if (arr[j][1] > end) {
                    end = arr[j][1];
                }
            }
        }
        ans.push([start, end]);
    }
    return ans;
}
console.log("merge overlapping of subinterval1", mergeSubinterval(arr, length));

//optimal ->  time=O(nlogn)+O(n) and space=O(n)
function mergeSubinterval2(arr, length) {
    arr.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < length; i++) {
        let anslen = ans.length;
        if (ans.length == 0 || ans[anslen - 1][1] < arr[i][0]) {
            ans.push(arr[i]);
        } else {
            if (ans[anslen - 1][1] < arr[i][1]) {
                ans[anslen - 1][1] = arr[i][1]
            }
        }
    }
    return ans;
}
console.log("merge overlapping of subinterval2", mergeSubinterval2(arr, length));