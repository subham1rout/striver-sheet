const prompt = require("prompt-sync")({ sigint: true });

//input the array
const arrlength = parseInt(prompt("Enter the array length:"));
let arr = [];
for (let i = 0; i < arrlength; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//how many top element need
let k = parseInt(prompt("Enter how many top no you want:"));

function getKFreqElement(arr, k) {
    let max = Math.max(...arr);
    let newarr = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        newarr[arr[i]] += 1;
    }
    // find max
    let karr = [];
    for (let j = 0; j < k; j++) {
        let maxnum = newarr[0];
        let maxindex = 0;
        for (let i = 1; i <= newarr.length; i++) {
            if (maxnum < newarr[i]) {
                maxindex = i;
                maxnum = newarr[i];
            } else if (maxnum == newarr[i]) {
                // newarr[maxindex]=0;
                maxindex = i;
            }
        }
        karr.push(maxindex);
        newarr[maxindex] = 0;
    }
    return karr;
}

let resultarr = getKFreqElement(arr, k);
for (const i of resultarr) {
    console.log(i + ' ');
}