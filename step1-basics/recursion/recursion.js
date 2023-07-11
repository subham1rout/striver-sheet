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

printNos2(num);


//print name n time using recursion
function printName(name, count) {
    let temp = 0;
    function print() {
        if (temp == count) return;
        console.log(name, temp);
        temp++;
        print();
    }
    print();
}
printName("subham", num);

//print N to 1 using recursion
function printNumber(n) {
    function print() {
        if (n == 0) return;
        console.log(n);
        n--;
        print();
    }
    print();
}

printNumber(num);

//without using global variable

//print name -> time=O(n) and space=O(n)
function printName2(count, n) {
    if (count > n) {
        return;
    }
    console.log('subham');
    printName2(count + 1, n);
}

printName2(1, num);

//print 1 to N
function printNumber2(count, n) {
    if (count > n) return;
    console.log(count);
    printNumber2(count + 1, n);
}

printNumber2(1, num);

//print N to 1
function printNumber3(count, n) {
    if (count < 1) return;
    console.log(count);
    printNumber3(count - 1, n);
}

printNumber3(num, num);


//User BACKTRACKING to solve te problem

//print 1 to N
function printName3(count, n) {
    if (count < 1) {
        return;
    }
    printName3(count - 1, n);
    console.log(count);
}

printName3(num, num);

//print N to 1
function printName4(count, n) {
    if (count > n) return;
    printName4(count + 1, n);
    console.log(count);
}

printName4(1, num);