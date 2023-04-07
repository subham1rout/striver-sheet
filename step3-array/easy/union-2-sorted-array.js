const prompt = require("prompt-sync")({ sigint: true });

//input 2 array
const arr1 = [];
const arr1length = parseInt(prompt("Enter length of the arr1: "));
for (let i = 0; i < arr1length; i++) {
    arr1.push(parseInt(prompt("Enter the number: ")));
}
const arr2 = [];
const arr2length = parseInt(prompt("Enter length of the arr2: "));
for (let i = 0; i < arr2length; i++) {
    arr2.push(parseInt(prompt("Enter the number: ")));
}

//defining function
function arrayUnion(arr1, arr2) {
    let set = new Set();
    for (let i = 0; i < arr1.length; i++) {
        set.add(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        set.add(arr2[i]);
    }
    let unionarr = [];
    set.forEach(element => {
        unionarr.push(element);
    });
    unionarr = unionarr.sort((a, b) => a - b);
    return unionarr;
}

//optimal approach
function arrayUnionOptimal(arr1, arr2) {
    let i = 0;
    let j = 0;
    let n1 = arr1.length;
    let n2 = arr2.length;
    let unionarr = [];
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            if (unionarr.length == 0 || unionarr[unionarr.length - 1] != arr1[i]) {
                unionarr.push(arr1[i]);
            }
            i++;
        } else {
            if (unionarr.length == 0 || unionarr[unionarr.length - 1] != arr2[j]) {
                unionarr.push(arr2[j]);
            }
            j++;
        }
    }
    while (j < n2) {
        if (unionarr.length == 0 || unionarr[unionarr.length - 1] != arr2[j]) {
            unionarr.push(arr2[j]);
        }
        j++;
    }
    while (i < n1) {
        if (unionarr.length == 0 || unionarr[unionarr.length - 1] != arr1[i]) {
            unionarr.push(arr1[i]);
        }
        i++;
    }
    return unionarr;
}

//output
// let unionarr = arrayUnion(arr1, arr2);  //time complexity=O(n1logn)+O(n2logn)+O(n1+n2) and space complexity=O(n1+n2)+O(n1+n2)
// console.log(`Union of ${arr1} and ${arr2} is ${unionarr}`);

let unionarrOptimal = arrayUnionOptimal(arr1, arr2);  //time complexity=O(n1logn)+O(n2logn)+O(n1+n2) and space complexity=O(n1+n2)+O(n1+n2)
console.log(`Union of ${arr1} and ${arr2} is ${unionarrOptimal}`);
