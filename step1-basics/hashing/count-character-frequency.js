const prompt = require("prompt-sync")();

//array input
let string = prompt("Enter the string:");

//pre compute
let hasharray = new Array(26).fill(0);  //26 max no possible for lower case
for (let i = 0; i < string.length; i++) {
    hasharray[string[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
}
console.log("Hash Array:", hasharray);

let q = parseInt(prompt("Enter no of queries:"));
while (q--) {
    let search = prompt("Enter the character to search:");
    //fetch
    console.log("Number of occurance:", hasharray[search.charCodeAt(0) - 'a'.charCodeAt(0)]);
}