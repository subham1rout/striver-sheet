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

//defining function
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

//defining function optimal approach
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

//calling function
let arr = intersectionArray(arr1, arr2); //time complexity=O(n1*n2) and space complexity=O(n2)
console.log(`intersection of 2 arr:`, arr);
let arroptimal = intersectionArrayOptimal(arr1, arr2);  //time complexity=O(n1+n2) and space complexity=O(1) i.e no extra space used(O(n1+n2) used only for input array)
console.log(`intersection of 2 arr optimal approach:`, arroptimal);