const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^3*logn) and space=O(2*n)
function find3Sum(arr, n) {
    let set = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    let temp = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
                    set.add(JSON.stringify(temp));
                }
            }
        }
    }
    let ans = [];
    for (let value of set) {
        ans.push(JSON.parse(value));
    }
    return ans;
}
console.log("Unique 3 SUMs are ", find3Sum(arr, length));

//better -> time=O(n^2*logn) and space=O(n)+O(2*n)
function find3Sum1(arr, n) {
    let set = new Set();
    for (let i = 0; i < n; i++) {
        let tempSet = new Set();
        for (let j = i + 1; j < n; j++) {
            let k = -(arr[i] + arr[j]);
            if (tempSet.has(k)) {
                let x = [arr[i], arr[j], k].sort((a, b) => a - b);
                set.add(JSON.stringify(x));
            }
            tempSet.add(arr[j]);
        }
    }
    let ans = [];
    for (const value of set) {
        ans.push(value);
    }
    return ans;
}
console.log("Unique 3 SUM1s are ", find3Sum1(arr, length));

//optimal -> 2 pointer approach -> time=O(nlogn)*O(n*n) and space=O(no of unique triplets)
function find3Sum2(arr, n) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (i > 0 && arr[i - 1] == arr[i]) continue;
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                ans.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
                while (j < k && arr[j] == arr[j - 1]) j++;
                while (j < k && arr[k] == arr[k + 1]) k--;
            }
        }
    }
    return ans;
}
console.log("Unique 3 SUM2s are ", find3Sum2(arr, length));