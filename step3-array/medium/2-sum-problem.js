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
// console.log(`In arr [ ${arr} ], 2 sum result: ${twoSumProblem(arr, target)}`);

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
// console.log(`In arr [ ${arr} ], 2 sum result: ${twoSumProblem1(arr, target)}`);

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
// console.log(`In arr [ ${arr} ], 2 sum result: ${twoSumProblem2(arr, target)}`);

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
// console.log(`In arr [ ${arr} ], 2 sum result optimal: ${twoSumProblem3(arr, target)}`);


//revision-1
//brute -> time=O(n^2) and space=O(1)
function twoSum(arr, N, target) {
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
console.log("Result -> ", twoSum(arr, length, target));

//better -> hashing -> time=O(nlogn) and space=O(n)
function twoSum1(arr, N, target) {
    let map = new Map();
    for (let i = 0; i < N; i++) {
        let value = target - arr[i];
        if (map.has(value)) {
            return [map.get(value), i];
        } else {
            map.set(arr[i], i);
        }
    }
    return [-1, -1];
}
console.log("Result -> ", twoSum1(arr, length, target));

//optimal -> used only for yes and no case -> 2 pointer -> greedy -> time=O(n) and space=O(1)
function twoSum2(arr, N, target) {
    arr = arr.sort((a, b) => a - b);
    let left = 0;
    let right = N - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == target) return "yes";
        else if (sum < target) left++;
        else right--;
    }
    return "no";
}
console.log("Result -> ", twoSum2(arr, length, target));