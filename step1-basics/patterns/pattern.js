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

//pattern-12
// 1                 1
// 1 2             2 1
// 1 2 3         3 2 1
// 1 2 3 4     4 3 2 1
// 1 2 3 4 5 5 4 3 2 1


function printTriangle12(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        for (let j = 1; j <= 2 * n - 2 * i; j++) {
            string += ' ';
        }
        for (let j = i; j >= 1; j--) {
            string += j;
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle12(n);

//pattern-13
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


function printTriangle13(n) {
    let string = '';
    let start = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            string += start + ' ';
            start++;
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle13(n);

//pattern-14
// A
// AB
// ABC
// ABCD
// ABCDE

function printTriangle14(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            string += String.fromCharCode(65 + j);
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle14(n);

//pattern-15
// ABCDE
// ABCD
// ABC
// AB
// A

function printTriangle15(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += String.fromCharCode(65 + j);
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle15(n);

//pattern-16
// A
// BB
// CCC
// DDDD
// EEEEE

function printTriangle16(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            string += String.fromCharCode(65 + i);
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle16(n);

//pattern-17
//    A
//   ABA
//  ABCBA
// ABCDCBA
//ABCDEDCBA

function printTriangle17(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            string += ' ';
        }
        for (let j = 0; j <= i; j++) {
            string += String.fromCharCode(65 + j);
        }
        for (let j = i - 1; j >= 0; j--) {
            string += String.fromCharCode(65 + j);
        }
        for (let j = 0; j < n - i - 1; j++) {
            string += ' ';
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle17(n);

//pattern-18
// E
// E D
// E D C
// E D C B
// E D C B A

function printTriangle18(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            string += String.fromCharCode(65 + n - j - 1);
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle18(n);

//pattern-19
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function printTriangle19(n) {
    let string = '';
    for (let i = 0; i < 2 * n; i++) {
        if (i < n) {
            for (let j = 0; j < n - i; j++) {
                string += '*';
            }
            for (let j = 0; j < 2 * i; j++) {
                string += ' ';
            }
            for (let j = 0; j < n - i; j++) {
                string += '*';
            }
        } else {
            for (let j = 0; j < i - n + 1; j++) {
                string += '*';
            }
            for (let j = 0; j < 2 * (2 * n - i - 1); j++) {
                string += ' ';
            }
            for (let j = 0; j < i - n + 1; j++) {
                string += '*';
            }
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle19(n);

//pattern-20
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function printTriangle20(n) {
    let string = '';
    for (let i = 0; i < 2 * n - 1; i++) {
        if (i < n) {
            for (let j = 0; j <= i; j++) {
                string += '*';
            }
            for (let j = 0; j < (2 * n) - 2 * (i + 1); j++) {
                string += ' ';
            }
            for (let j = 0; j <= i; j++) {
                string += '*';
            }
        } else {
            for (let j = 0; j < 2 * n - i - 1; j++) {
                string += '*';
            }
            for (let j = 0; j < 2 * n - 2 * (2 * n - i - 1); j++) {
                string += ' ';
            }
            for (let j = 0; j < 2 * n - i - 1; j++) {
                string += '*';
            }
        }
        string += '\n';
    }
    console.log(string);
}

printTriangle20(n);

//pattern-21
// ****
// *  *
// *  *
// ****

function printSquare21(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            for (let j = 0; j < n; j++) {
                string += '*';
            }
        } else {
            for (let j = 0; j < n; j++) {
                if (j == 0 || j == n - 1) {
                    string += '*';
                } else {
                    string += ' ';
                }
            }
        }
        string += '\n';
    }
    console.log(string);
}

printSquare21(n);

//pattern-22
// 5 5 5 5 5 5 5 5 5
// 5 4 4 4 4 4 4 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 2 1 2 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 4 4 4 4 4 4 5
// 5 5 5 5 5 5 5 5 5

function min(a, b, c, d) {
    let min1;
    let min2;
    if (a < b) {
        min1 = a;
    } else {
        min1 = b;
    }
    if (c < d) {
        min2 = c;
    } else {
        min2 = d;
    }
    if (min1 < min2) {
        return min1;
    } else {
        return min2;
    }
}


function printSquare22(n) {
    let string = '';
    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i;
            let left = j;
            let right = 2 * n - 2 - j;
            let bottom = 2 * n - 2 - i;
            let min = n - Math.min(top, left, right, bottom);
            string += min + ' ';
        }
        string += '\n';
    }
    console.log(string);
}

printSquare22(n);