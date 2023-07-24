const prompt = require("prompt-sync")({ sigint: true });

//input the array
const arrlength = parseInt(prompt("Enter the array length:"));
let inputarr = [];
for (let i = 0; i < arrlength; i++) {
    inputarr.push(parseInt(prompt("Enter the number:")));
}

//Enter queries
let query = parseInt(prompt("Enter no of query:"));
while (query--) {
    let number = parseInt(prompt("Enter the value to search:"));
    console.log("No of times appear:", countFrequency(inputarr, number));
}


//logic
function countFrequency(inputarr, number) {
    let hasharray = new Array(10).fill(0);
    for (let i = 0; i < inputarr.length; i++) {
        hasharray[inputarr[i]] += 1;
    }
    console.log(JSON.stringify(hasharray));
    return hasharray[number];
}

//revision-1
const length = parseInt(prompt("enter the length of the array:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the number:")));
}
let max = arr[0];
for (let i = 1; i < length; i++) {
    if (max < arr[i]) max = arr[i];
}
const newarr = new Array(max + 1).fill(0);
for (let i = 0; i < length; i++) {
    newarr[arr[i]]++;
}

const query1 = parseInt(prompt('enter no of queries:'));
for (let i = 0; i < query1; i++) {
    let no = parseInt(prompt('enter the no which frequency you want:'));
    console.log('frequency of ', no, ' is ', newarr[no]);
}