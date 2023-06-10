const prompt = require("prompt-sync")({ sigint: true });

//input
let n = Number.parseInt(prompt("enter n value: "));

//pattern-1
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function printSquare(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            string += '*'
        }
        string += '\n';
    }
    console.log(string);
}

printSquare(n);