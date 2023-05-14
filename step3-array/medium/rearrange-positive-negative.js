const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//brute force -> time =O(2n) and space=O(n)
function rearrange(arr) {
    let length = arr.length;
    let positivearr = [];
    let negativearr = [];
    for (let i = 0; i < length; i++) {
        if (arr[i] >= 0) {
            positivearr.push(arr[i]);
        } else {
            negativearr.push(arr[i]);
        }
    }
    for (let i = 0; i < positivearr.length; i++) {
        arr[2 * i] = positivearr[i];
        arr[2 * i + 1] = negativearr[i];
    }
    return arr;
}

// let ans = rearrange(arr);
// console.log("Rearrange array is ", ans);


//optimal soulution -> time=O(n) and space = O(n)
function rearrange1(arr) {
    let length = arr.length;
    let posindex = 0;
    let negindex = 1;
    let ans = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        if (arr[i] >= 0) {
            ans[posindex] = arr[i];
            posindex += 2;
        } else {
            ans[negindex] = arr[i];
            negindex += 2;
        }
    }
    return ans;
}

let ans1 = rearrange1(arr);
console.log("Rearranged array is ", ans1);

//brute force having any length of the array i.e. not even array
function rearrange2(arr) {
    let length = arr.length;
    let posarr = [];
    let negarr = [];
    for (let i = 0; i < length; i++) {
        if (arr[i] >= 0) {
            posarr.push(arr[i]);
        } else {
            negarr.push(arr[i]);
        }
    }
    if (posarr.length > negarr.length) {
        for (let i = 0; i < negarr.length; i++) {
            arr[2 * i] = posarr[i];
            arr[2 * i + 1] = negarr[i];
        }
        let templength = negarr.length * 2;
        for (let i = negarr.length; i < posarr.length; i++) {
            arr[templength] = posarr[i];
            templength++;
        }
    } else {
        for (let i = 0; i < posarr.length; i++) {
            arr[2 * i] = posarr[i];
            arr[2 * i + 1] = negarr[i];
        }
        let templength = posarr.length * 2;
        for (let i = posarr.length; i < negarr.length; i++) {
            arr[templength] = negarr[i];
            templength++;
        }
    }
    return arr;
}

// let ans2 = rearrange2(arr);
// console.log("Rearrange of the array is ", ans2);