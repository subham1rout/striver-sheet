const prompt = require("prompt-sync")({ sigint: true });

//input array
const length1 = parseInt(prompt("enter 1st array length: "));
const arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt("enter number: ")));
}

const length2 = parseInt(prompt("enter2nd array length: "));
const arr2 = [];
for (let i = 0; i < length2; i++) {
    arr2.push(parseInt(prompt("enter number: ")));
}

//brute force -> time complexity=O(n1*n2) and space complexity=O(n2)
function intersectionArray(arr1, arr2) {
    let intersectionArr = [];
    let visited = new Array(arr2.length).fill(0);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j] && visited[j] == 0) {
                intersectionArr.push(arr1[i]);
                visited[j] = 1;
                break;
            }
            if (arr1[i] < arr2[j]) break;
        }
    }
    return intersectionArr;
}
// console.log(`intersection of 2 arr:`, intersectionArray(arr1, arr2));

//optimal approach -> time complexity=O(n1+n2) and space complexity=O(1) i.e no extra space used(O(n1+n2) used only for input array)
function intersectionArrayOptimal(arr1, arr2) {
    let intArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            intArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    return intArr;
}
// console.log(`intersection of 2 arr optimal approach:`, intersectionArrayOptimal(arr1, arr2));


//revision-1
//brute force -> time=O(n*m) and space=O(n+m)
function intersection(arr1, arr2, m, n) {
    let result = [];
    let visitedArr = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr1[i] == arr2[j] && visitedArr[j] == 0) {
                result.push(arr1[i]);
                visitedArr[j] = 1;
                break;
            }
            if (arr1[i] < arr2[j]) break;
        }
    }
    return result;
}
console.log(`intersection of 2 array ${arr1} and ${arr2} is ${intersection(arr1, arr2, length1, length2)}`);

//optimal -> time=O(n+m) and space=O(1)
function intersection1(arr1, arr2, m, n) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) i++;
        else if (arr1[i] > arr2[i]) j++;
        else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    return result;
}
console.log(`intersection of 2 array optimal ${arr1} and ${arr2} is ${intersection1(arr1, arr2, length1, length2)}`);