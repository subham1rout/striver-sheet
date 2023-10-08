const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//brute force -> time=O(n^2) and space=O(n)
function leadersInArray(arr) {
    let ans = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let leader = true;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                leader = false;
                break;
            }
        }
        if (leader == true) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

let ans = leadersInArray(arr);
console.log(`Leaders in the array [ ${arr} ] is [ ${ans} ]`);

//optimal solution -> time=O(n) and space=O(n)
function leadersInArrayOptimal(arr) {
    let ans = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) {
            ans.push(arr[i]);
            max = arr[i];
        }
    }
    return ans;
}

let ans2 = leadersInArrayOptimal(arr);
console.log(`Leaders in the array [ ${arr} ] is [ ${ans2} ]`);


//revision-1
function leaders(arr, n) {
    let leaders = [];
    for (let i = 0; i < n; i++) {
        let flag = 0;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) leaders.push(arr[i]);
    }
    return leaders;
}
console.log("Leaders Array", leaders(arr, length));