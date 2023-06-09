const prompt = require("prompt-sync")({ sigint: true });

//input
let n = Number.parseInt(prompt("enter n value: "));
let m = Number.parseInt(prompt("enter m value: "));

function compareNM(n, m) {
    if (n > m) console.log("greater");
    else if (n == m) console.log("equal");
    else console.log("lesser");
}

compareNM(n, m);