const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter the length:"));
const weights = [];
for (let i = 0; i < length; i++) {
    weights.push(parseInt(prompt("enter the weights:")));
}
const days = parseInt(prompt("enter the no of days assigned for shipping:"));

function getMax(weights) {
    let max = weights[0];
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > max) {
            max = weights[i];
        }
    }
    return max;
}

function getSum(weights) {
    // let last = weights[weights.length - 1];
    // return Math.floor(last * (last + 1) / 2);
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    return sum;
}

function getDays(weights, capacity) {
    let load = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
        if (load + weights[i] <= capacity) {
            load += weights[i];
        } else {
            days++;
            load = weights[i];
        }
    }
    return days;
}

//brute ->time=O(sum-max+1)*O(n) and space=O(1) 
function getLeastCapacity(weights, days) {
    let max = getMax(weights);
    let sum = getSum(weights);
    for (let i = max; i <= sum; i++) {
        let daysTaken = getDays(weights, i);
        if (daysTaken <= days) {
            return i;
        }
    }
}
console.log("Least capacity to ship packages = ", getLeastCapacity(weights, days));

//optimal -> time=O(log(sum-max))*O(n) and space=O(1)
function getLeastCapacity2(weights, days) {
    let low = getMax(weights);
    let high = getSum(weights);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let daysTaken = getDays(weights, mid);
        if (daysTaken <= days) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
console.log("Least capacity to ship packages1 = ", getLeastCapacity2(weights, days));