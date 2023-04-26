const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}
let target = Number.parseInt(prompt("enter sum of 2 number: "));

//brute force -> time=O(n^2) and space=O(1)
function twoSumProblem(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            if (arr[i] + arr[j] == target) {
                return 'yes';
            }
        }
    }
    return 'no';
}

let ans = twoSumProblem(arr, target);
console.log(`In arr [ ${arr} ], 2 sum result: ${ans}`);

//optimize brute force -> time=o(n^2) and space=O(1)
function twoSumProblem1(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
    return 'not exist';
}

let ans1 = twoSumProblem1(arr, target);
console.log(`In arr [ ${arr} ], 2 sum result: ${ans1}`);

//better solution -> using hash map -> time=O(nlogn) and space=O(n)
function twoSumProblem2(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let remain = target - arr[i];
        let temp = map.has(remain);
        if (temp) {
            let index = map.get(remain); //logn
            return [i, index];
        }
        map.set(arr[i], i);
    }
    return 'not exist';
}

let ans2 = twoSumProblem2(arr, target);
console.log(`In arr [ ${arr} ], 2 sum result: ${ans2}`);

//optimal solution -> 2 pointer approach -> time=O(n) and space =O(1)
function twoSumProblem3(arr, target) {
    arr = arr.sort();
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum < target) {
            left++;
        } else if (sum == target) {
            return 'yes';
        } else {
            right--;
        }
    }
    return 'no';
}

let ans3 = twoSumProblem3(arr, target);
console.log(`In arr [ ${arr} ], 2 sum result optimal: ${ans3}`);    