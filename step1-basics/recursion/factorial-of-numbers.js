const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number: "));

function getFactorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * getFactorial(num - 1);
}
console.log(getFactorial(number));