const prompt = require("prompt-sync")({ sigint: true });

const element = parseInt(prompt("enter the element:"));
const root = parseInt(prompt("enter root required:"));

//brute -> time=O(nlogn) and space=O(1)
function mul(i, n) {
    let ans = 1;
    for (let j = 0; j < n; j++) {
        ans = ans * i;
    }
    return ans;
}

function findNthRoot(m, n) {
    for (let i = 1; i <= m; i++) {
        if (mul(i, n) == m) {
            return i;
        } else if (mul(i, n) > m) {
            break;
        }
    }
    return -1;
}
console.log("Nth Root=", findNthRoot(element, root));

//optimal -> time=O(logn * logn) and space=O(1)
function mul1(val, n, m) {
    let ans=1;
    for (let i = 0; i < n; i++) {
        ans=ans*val;
        if(ans>m){
            return 2;
        }
    }
    if(ans==m) return 1;
    return 0;
}
function findNthRoot2(m, n) {
    let low = 1;
    let high = m;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let mul = mul1(mid, n, m);
        if (mul == 1) {
            return mid;
        } else if (mul == 2) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
console.log("Nth root=", findNthRoot2(element, root));