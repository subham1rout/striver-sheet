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
