const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number: "));

function getFactorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * getFactorial(num - 1);
}
console.log(getFactorial(number));



//revision-1

function factorial(n) {
    if (n == 1 || n == 0) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial of the number is", factorial(number));


// https://practice.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0

//factorial numbers - 1, 2, 6, 24, 120..

function factorialNumbers(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let fact = factorial(i);
        if (fact <= n) {
            arr.push(fact);
        }
    }
    console.log(arr);
}

factorialNumbers(number);
