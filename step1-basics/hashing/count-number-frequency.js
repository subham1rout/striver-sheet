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