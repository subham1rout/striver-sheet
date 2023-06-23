const prompt = require("prompt-sync")({ sigint: true });

//input
let num = parseInt(prompt("enter the number:"));


//count digits
function evenlyDivides(n) {
    let D = n;
    let count = 0;
    while (D !== 0) {
        D = Math.floor(D / 10);
        R = D % 10;
        if (n % R == 0) {
            count++;
        }
    }
    console.log("Count=", count);
}

evenlyDivides(num);

//reverse a number
function reverse(n) {
    let revNo = 0;
    let D = n;
    while (D > 0) {
        let R = D % 10;
        revNo = revNo * 10 + R;
        D = Math.floor(D / 10);
    }
    console.log("Reverse Number is ", revNo);
}

reverse(num);

//check palindrome
function is_palindrome(n) {
    let x = n;
    let newNo = 0;
    while (x > 0) {
        let r = x % 10;
        newNo = newNo * 10 + r;
        x = Math.floor(x / 10);
    }
    if (n == newNo) {
        console.log(n, " is a palindrome");
    } else {
        console.log(n, " is not a palindrome");
    }
}

is_palindrome(num);