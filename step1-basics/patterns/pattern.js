const prompt = require("prompt-sync")({ sigint: true });

//input
let n = Number.parseInt(prompt("enter n value: "));

//pattern-1
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function printSquare1(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            string += '*'
        }
        string += '\n';
    }
    console.log(string);
}

printSquare1(n);

//pattern-2
// *
// * *
// * * *
// * * * *
// * * * * *

function printTriangle2(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle2(n);

//pattern-3
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function printTriangle3(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle3(n);

//pattern-4
// 1
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5

function printTriangle4(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += i;
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle4(n);

//pattern-5
// * * * * *
// * * * * 
// * * * 
// * *  
// * 

function printTriangle5(n) {
    let string = '';
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle5(n);

//pattern-6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3 
// 1 2  
// 1 

function printTriangle6(n) {
    let string = '';
    for (let i = 5; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle6(n);