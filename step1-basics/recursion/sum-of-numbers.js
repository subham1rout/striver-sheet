const prompt = require('prompt-sync')({ sigint: true });
const num = parseInt(prompt('Enter a number: '));

exports.sumOfNumbers = (num => {
    if (num === 1) {
        return 1;
    }
    return this.sumOfNumbers(num - 1) + num;
});

console.log(this.sumOfNumbers(num));

//gfg - Sum of first n terms cube
exports.sumOfSeries = (num => {
    if (num === 1) {
        return 1;
    }
    return this.sumOfSeries(num - 1) + Math.pow(num, 3);
});

console.log(this.sumOfSeries(num));

//revision-1
function sum(n) {
    if (n == 1) return 1;
    return n + sum(n - 1);
}

let result = sum(num);
console.log(`Sum of numbers from 1 to ${num} is ${result}`);


//sum of series of cube of numbers
function cubeSum(n) {
    if (n == 1) return 1;
    return n ** 3 + cubeSum(n - 1);
}

let sumresult = cubeSum(num);
console.log("Cube sum =", sumresult);