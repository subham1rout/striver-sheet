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