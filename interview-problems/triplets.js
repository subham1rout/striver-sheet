const prompt = require("prompt-sync")({ sigint: true });

const arrlength = parseInt(prompt("enter the array length:"));
const A = [];
for (let i = 0; i < arrlength; i++) {
    A.push(parseInt(prompt("enter the number:")));
}
const d = parseInt(prompt("enter the integer:"));

//brute force -> time=O(n^3) and space=O(1)
function findNoOfTriplets(A, d) {
    let n = A.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (A[j] - A[i] == A[k] - A[j] && A[j] - A[i] == d && A[k] - A[j] == d) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log("Number of triplets =", findNoOfTriplets(A, d));

//optimal
function findNoOfTripletsOptimal(A, d) {
    A = A.sort((a, b) => a - b);
    let count = 0;
    let n = A.length;
    for (let i = 0; i < n; i++) {
        let j = i + 1;
        let k = n - 1;
        let sum = A[i] + A[j] + A[k];
        if (A[j] - A[i] == A[k] - A[j] && A[j] - A[i] == d && A[k] - A[j] == d) {
            count++;
        }
    }
    return count;
}
console.log("Number of triplets =", findNoOfTripletsOptimal(A, d));



// Sorry not done graph yet but will covering soon