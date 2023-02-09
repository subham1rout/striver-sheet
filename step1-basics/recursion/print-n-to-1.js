const prompt = require('prompt-sync')({ sigint: true });
const num = parseInt(prompt('Enter a number: '));

function printNumbers(num) {
    if (num === 1) {
        return 1;
    }
    return num + " " + printNumbers(num - 1);
}

console.log(printNumbers(num));