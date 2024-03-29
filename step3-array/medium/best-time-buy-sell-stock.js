const prompt = require("prompt-sync")({ sigint: true });

//input array
let arr = [];
let length = parseInt(prompt("Enter length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//solution -> time=O(n) and space=O(1)
function bestTimeBuySellStock(arr) {
    let min = arr[0];
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
        let cost = arr[i] - min;
        if (cost > profit) {
            profit = cost;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return profit;
}

let maxprofit = bestTimeBuySellStock(arr);
console.log(`Maximum profit according to the array [ ${arr} ] is ${maxprofit}`);

//get date in which we buy and sell -> time=O(n) and space=O(1)
function bestTimeBuySellStock1(arr) {
    let min = arr[0];
    let sell = arr[0];
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
        let cost = arr[i] - min;
        if (cost > profit) {
            sell = arr[i];
            profit = cost;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [min, sell];
}

let maxprofit1 = bestTimeBuySellStock1(arr);
console.log(`According to the array [ ${arr} ], Buy date is ${maxprofit1[0]} and Sell date is ${maxprofit1[1]}`);


//revision-1
//brute -> time=O(n^2) and space=O(1)
function bestTime(arr, n) {
    let maxprofit = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let profit = arr[j] - arr[i];
            if (profit > maxprofit) maxprofit = profit;
        }
    }
    return maxprofit;
}
console.log("Maxium profit from the price array is", bestTime(arr, length));

// optimal -> time=O(n) and space=O(1)
function bestTime1(arr, n) {
    let maxprofit = 0;
    let min = arr[0];
    let buydate = -1;
    let selldate = -1;
    for (let i = 1; i < n; i++) {
        let profit = arr[i] - min;
        if (profit > maxprofit) {
            maxprofit = profit;
            buydate = min;
            selldate = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Buy and Sell Date are ", buydate, selldate);
    return maxprofit;
}
console.log("Maxium profit1 from the price array is", bestTime1(arr, length));