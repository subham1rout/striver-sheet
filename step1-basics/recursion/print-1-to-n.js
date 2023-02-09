const prompt = require('prompt-sync')({ sigint: true });
const num = Number.parseInt(prompt('Enter a number: '));

//logic-2 optimized
function printNumber(num) {
    if (num === 1) {
        return 1;
    }
    return printNumber(num - 1) + " " + num;
}
console.log(printNumber(num));


//logic-1
// let string = '';
// function printNumber(n) {
//     if (n <= 0) {
//         return;
//     }
//     string = string + (num - n + 1) + ' ';
//     printNumber(n - 1);
// }
// printNumber(num);
// console.log(string);

//other logic
// function printNumbers(num) {
//     let string = '';
//     function printValue(n) {
//         if (num - n + 1 > num) {
//             return;
//         }
//         string += (num - n + 1) + " ";
//         printValue(n - 1);
//     }
//     printValue(num);
//     console.log(string);
// }
// printNumbers(num);