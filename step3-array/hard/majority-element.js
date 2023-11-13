const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}


//brute force -> time=O(n^2) and space=O(1)
function findMajority(arr, n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (ans.length == 0 || ans[0] != arr[i]) {
            let count = 0;
            for (let j = 0; j < n; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }
            if (count > Math.floor(n / 3)) ans.push(arr[i]);
        }
        if (ans.length == 2) break;
    }
    return ans;
}
console.log("Majority element >n/3 is ", findMajority(arr, length));


//better approach -> time=O(nlogn) and space=O(n)
function findMajority1(arr, n) {
    let res = [];
    const map = new Map();
    for (let i = 0; i < n; i++) {
        let value = map.get(arr[i]);
        if (value == undefined) {
            value = 0;
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], value + 1);
        }
        if (value + 1 == Math.floor(n / 3) + 1) {
            res.push(arr[i]);
        }
        if (res.length == 2) break;
    }
    return res;
}
console.log("Majority element1 >n/3 is ", findMajority1(arr, length));


//optimal -> time=O(2n) and space=O(1)
function findMajority2(arr, n) {
    let count1 = 0;
    let count2 = 0;
    let element1 = Number.MIN_SAFE_INTEGER;
    let element2 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (count1 == 0 && arr[i] != element2) {
            count1 = 1;
            element1 = arr[i];
        } else if (count2 == 0 && arr[i] != element1) {
            count2 = 1;
            element2 = arr[i];
        } else if (element1 == arr[i]) {
            count1++;
        } else if (element2 == arr[i]) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] == element1) count1++;
        else if (arr[i] == element2) count2++;
    }
    let value = Math.floor(n / 3);
    if (count1 > value) ans.push(element1);
    if (count2 > value) ans.push(element2);
    return ans;
}
console.log("Majority element2 >n/3 is ", findMajority2(arr, length));