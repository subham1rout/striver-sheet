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

//pattern-7
//     *
//    ***  
//   *****
//  *******
// *********

function printTriangle7(n) {
    let string = '';
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            string += ' ';
        }
        for (let j = 0; j < (2 * n - 1) - 2 * i; j++) {
            string += '*';
        }
        for (let j = 0; j < i; j++) {
            string += ' ';
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle7(n);

//pattern-8
// *********
//  *******
//   *****
//    ***
//     *

function printTriangle8(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += ' ';
        }
        for (let j = 0; j < (2 * n - 1) - 2 * i; j++) {
            string += '*';
        }
        for (let j = 0; j < n; j++) {
            string += ' ';
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle8(n);

//pattern-9
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

function printDiamond9(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            string += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            string += '*';
        }
        for (let j = 0; j < n - i - 1; j++) {
            string += ' ';
        }
        string += '\n';
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += ' ';
        }
        for (let j = 0; j < (2 * n - 1) - 2 * i; j++) {
            string += '*';
        }
        for (let j = 0; j < i; j++) {
            string += ' ';
        }
        string += '\n';
    }
    console.log(string);
}

printDiamond9(n);

//pattern-10
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
// * * * *
// * * *
// * *
// *

function printTriangle10(n) {
    let string = '';
    for (let i = 1; i < 2 * n; i++) {
        if (i <= n) {
            for (let j = 0; j < i; j++) {
                string += '*';
            }
        } else {
            for (let j = 0; j < 2 * n - i; j++) {
                string += '*';
            }
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle10(n);

//pattern-11
// 1 
// 0 1 
// 1 0 1
// 0 1 0 1 
// 1 0 1 0 1

function printTriangle11(n) {
    let string = '';
    let start;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            start = 1;
        } else {
            start = 0;
        }
        for (let j = 0; j <= i; j++) {
            string += start;
            start = 1 - start;
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle11(n);