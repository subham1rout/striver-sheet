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



//lcm and gcd

//brute force approach
function lcmAndGcd(x, y) {
    //gcd
    let gcd;
    let min;
    if (x > y) min = y;
    else min = x;
    for (let i = min; i > 0; i--) {
        if (x % i == 0 && y % i == 0) {
            gcd = i;
            break;
        }
    }
    console.log("GCD=", gcd);
    //time=O(min(x,y))

    //lcm
    let max;
    if (x > y) max = x;
    else max = y;
    while (max % x !== 0 || max % y !== 0) {
        max++;
    }
    console.log("LCM=", max);
}

//input
let num2 = parseInt(prompt("enter the number2:"));

lcmAndGcd(num, num2);

//optimal approach -> euclidean algorithm -> time=O(log(min(a,b)))
function lcmAndGcdOptimal(a, b) {
    let temp = a * b;
    let gcd;
    while (a !== 0 && b !== 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    if (a == 0) gcd = b;
    else gcd = a;
    console.log("GCD in optimal=", gcd);

    let lcm = temp / gcd;
    console.log("LCM in optimal=", lcm);
}

lcmAndGcdOptimal(num, num2);


//armstrong number
function armstrongNumber(n) {
    let x = n;
    let length = 0;
    let newno = 0;
    while (x > 0) {
        x = Math.floor(x / 10);
        length++;
    }
    x = n;
    while (x > 0) {
        let r = x % 10;
        newno += Math.pow(r, length);
        x = Math.floor(x / 10);
    }
    if (n == newno) console.log(n, "is a armstrong number");
    else console.log(n, "is not a armstrong number");
}

armstrongNumber(num);



//all divisors
function printAllDivisors(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            string += i + ' ';
        }
    }
    console.log("All divisors are ", string);
}
//time = O(n)

printAllDivisors(num);

function printAllDivisorsOptimal(n) {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            result.push(i);
            if (n / i !== i) {
                result.push(n / i);
            }
        }
    }
    console.log("All divisors in sqrt(n) time are ", result);
}
//time=O(sqrt(n))

printAllDivisorsOptimal(num);



//check for prime
function checkPrime(n) {
    if (n > 1) {
        let flag = 0;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) console.log(n, "is a prime number");
        else console.log(n, "is not a prime number");
    } else console.log(n, "is not a prime number");
}
//time=O(n)
checkPrime(num);

function checkPrimeOptimal(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            count++;
            if ((n / i) % i == 0) {
                count++;
            }
        }
    }
    if (count == 2) console.log(n, "is a prime number");
    else console.log(n, "is not a priime number");
}
//time=O(sqrt(n))
checkPrimeOptimal(num);