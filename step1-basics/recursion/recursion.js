const prompt = require("prompt-sync")({ sigint: true });
let num = parseInt(prompt("Enter the number:"));

//print 1 to N
function printNos(n) {
    if (n == 0) return;
    n--;
    printNos(n);
    console.log(n + 1);
}

printNos(num);

//2nd approach


function printNos2(n) {
    let count = 0;
    let string = '';
    function print() {
        if (count == n) return;
        count++;
        string += count + ' ';
        print();
    }
    print();
    console.log(string);
}

printNos2(10);