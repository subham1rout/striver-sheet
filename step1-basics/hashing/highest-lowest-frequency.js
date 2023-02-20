const prompt = require("prompt-sync")({ sigint: true });

//input array
const arrlength = parseInt(prompt("Enter the array size:"));
const arr = [];
for (let i = 0; i < arrlength; i++) {
    arr.push(parseInt(prompt("Enter the number:")));
}

//pre compute
let max = Math.max(...arr);
let hasharray = new Array(max + 1).fill(0);
for (let i = 0; i < arrlength; i++) {
    hasharray[arr[i]] += 1;
}
console.log("hash array:", hasharray);


//get highest
function getHighestFrequency() {
    let maxno = hasharray[1];
    for (let i = 1; i <= hasharray.length; i++) {
        if (maxno < hasharray[i]) {
            maxno = hasharray[i];
        }
    }
    return maxno;
}
console.log("Maximum Frequency in the array:", getHighestFrequency());

//get lowest
function getLowestFrequency() {
    let minno = hasharray[1];
    for (let i = 1; i <= hasharray.length; i++) {
        if (minno > hasharray[i]) {
            minno = hasharray[i];
        }
    }
    return minno;
}
console.log("Maximum Frequency in the array:", getLowestFrequency());