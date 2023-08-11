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

//defining function -> time complexity=O(n1logn)+O(n2logn)+O(n1+n2) and space complexity=O(n1+n2)+O(n1+n2)
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
// console.log(`Union of ${arr1} and ${arr2} is ${arrayUnion(arr1, arr2)}`);

//optimal approach -> time complexity=O(n1+n2) and space complexity=O(n1+n2) for only return the array not for algorithm
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
// console.log(`Union of ${arr1} and ${arr2} is ${arrayUnionOptimal(arr1, arr2)}`);



//revision-1 ->
//my extreme brute force -> time=O(n^2) and space=O(2n)
function arrayUnion1(arr1, arr2, n, m) {
    let temp = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr1[i] == arr2[j]) {
                if (!temp.includes(arr1[i])) {
                    temp.push(arr1[i]);
                    break;
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!temp.includes(arr1[i])) temp.push(arr1[i]);
    }
    for (let i = 0; i < m; i++) {
        if (!temp.includes(arr2[i])) temp.push(arr2[i]);
    }
    return temp.sort((a, b) => a - b);
}
console.log("Union of 2 array is", arrayUnion1(arr1, arr2, arr1length, arr2length));

//brute force -> time=O(nlogn+mlogm) and space=O(n+m)
function arrayUnion2(arr1, arr2, n, m) {
    let set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(arr1[i]);
    }
    for (let i = 0; i < m; i++) {
        set.add(arr2[i]);
    }
    return Array.from(set).sort((a, b) => a - b);
}
console.log("Union of 2 sorted array is", arrayUnion2(arr1, arr2, arr1length, arr2length));

//optimal -> time=O(n+m) and space=O(n+m)
function arrayUnion3(arr1, arr2, n, m) {
    let i = 0;
    let j = 0;
    let unionarr1 = [];
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) {
            if (unionarr1.length == 0 || unionarr1[unionarr1.length - 1] != arr1[i]) {
                unionarr1.push(arr1[i]);
            }
            i++;
        } else {
            if (unionarr1.length == 0 || unionarr1[unionarr1.length - 1] != arr2[j]) {
                unionarr1.push(arr2[j]);
            }
            j++;
        }
    }
    while (j < m) {
        if (unionarr1.length == 0 || unionarr1[unionarr1.length - 1] != arr2[j]) {
            unionarr1.push(arr2[j]);
        }
        j++;
    }
    while (i < n) {
        if (unionarr1.length == 0 || unionarr1[unionarr1.length - 1] != arr1[i]) {
            unionarr1.push(arr1[i]);
        }
        i++;
    }
    return unionarr1;
}
console.log("Union Array is", arrayUnion3(arr1, arr2, arr1length, arr2length));