const prompt = require("prompt-sync")({ config: true });

let length = parseInt(prompt("enter the length of the array:"));
let array = [];
for (let i = 0; i < length; i++) {
    array.push(parseInt(prompt("enter the element:")));
}

//brute -> time=O(n^2) and space=O(1)
function repeatingAndMisssingNo(arr, length) {
    let A = -1;
    let B = -1;
    for (let i = 1; i <= length; i++) {
        let temp = 0;
        for (let j = 0; j < length; j++) {
            if (i == arr[j]) {
                temp++;
            }
        }
        if (temp == 2) A = i;
        else if (temp == 0) B = i;
        if (A != -1 && B != -1) break;
    }
    return [A, B];
}
console.log("Repeating and Missing No from Array are ", repeatingAndMisssingNo(array, length));

//better -> time=O(2n) and space=O(n)
function repeatingAndMisssingNo2(arr, length) {
    let A = -1;
    let B = -1;
    let hasharr = new Array(length + 1).fill(0);
    for (let i = 0; i < length; i++) {
        hasharr[arr[i]]++;
    }
    for (let i = 1; i <= length; i++) {
        if (hasharr[i] == 2) {
            A = i;
        } else if (hasharr[i] == 0) {
            B = i;
        }
        if (A != -1 && B != -1) break;
    }
    return [A, B];
}
console.log("Repeating and Missing No from Array2 are ", repeatingAndMisssingNo2(array, length));

//optimal -> time=O(n) and space=O(1)
function repeatingAndMisssingNo3(arr, length) {
    let sn = Math.floor((length * (length + 1)) / 2);
    let s2n = Math.floor(((length) * (length + 1) * (2 * length + 1)) / 6);
    let s = 0;
    let s2 = 0;
    for (let i = 0; i < length; i++) {
        s += arr[i];
        s2 += arr[i] * arr[i];
    }
    let value = s - sn; //x-y
    let value1 = s2 - s2n;
    value1 = Math.floor(value1 / value); //x+y
    let x = Math.floor((value + value1) / 2);
    let y = value1 - x;
    return [x, y];
}
console.log("Repeating and Missing No from Array2 are ", repeatingAndMisssingNo3(array, length));