const prompt = require("prompt-sync")({ sigint: true });
const seriesLength = parseInt(prompt("Enter fibonacci series length:"));

const printFibonacciSeries = function (sl) {
    let first = 0n;
    let second = 1n;
    let string = '0';
    while (sl > 1) {
        string += ' ' + second;
        let temp = first + second;
        first = second;
        second = temp;
        sl--;
    }
    console.log(string);
}

printFibonacciSeries(seriesLength);


//leetcode
// var fib = function(n) {
//     if (n < 2) return n
//     return fib(n-1) + fib(n-2)
// };

// var fib = function(n) {
//     let start=0;
//     let second=1;
//     if(n==0){
//         return 0;
//     }else if(n==1){
//         return 1;
//     }else{
//         let temp;
//         while(n>1){
//             temp=start+second;
//             start=second;
//             second=temp;
//             n--;
//         }
//         return temp;
//     }
// };


//fibonacci series upto value n
function fibonacciSeries(n) {
    let temp = 1;
    let index = 0;
    let fibarr = [0];
    while (temp < n) {
        fibarr.push(temp);
        temp = fibarr[index] + fibarr[index + 1];
        index++;
    }
    console.log(fibarr);
}

fibonacciSeries(seriesLength);

//using recursion
let fibarr = [0, 1];
function fibonacciRecursion(n, index) {
    let temp = fibarr[index] + fibarr[index + 1];
    if (temp > n) return;
    fibarr.push(temp);
    fibonacciRecursion(n, index + 1);
}

fibonacciRecursion(seriesLength, 0);
console.log(fibarr);

// find nth fibonacci number -> f(n)= f(n-1)+f(n-2)
const n = parseInt(prompt("Enter fibonacci nth term you want:"));

function fibonacci(n) {
    let fibarray = [];
    fibarray[0] = 0;
    fibarray[1] = 1;
    for (let i = 2; i <= n; i++) {
        fibarray[i] = fibarray[i - 1] + fibarray[i - 2];
    }
    return fibarray[n];
}

console.log("Nth term given by you in fibonacci series is ", fibonacci(n));

//using recursion -> time=O(2^n) and space=O(n)
function fibonacciRecursion2(n) {
    if (n <= 1) return n;
    return fibonacciRecursion2(n - 1) + fibonacciRecursion2(n - 2);
}

console.log("Nth term given by you in fibonacci series using recursion is ", fibonacciRecursion2(n));