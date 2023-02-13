const prompt = require("prompt-sync")({ sigint: true });
let string = prompt("Enter a string:");

function checkPalindrome(string) {
    string = string.toLowerCase();
    let regexPattern = /[^A-Za-z0-9]/g;
    string = string.replace(regexPattern, '');
    let newstring = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newstring += string[i];
    }
    console.log("Reverse of string:", newstring);
    if (string === newstring) {
        console.log("Palindrome!");
    } else {
        console.log("Not a palindrome!");
    }
}

checkPalindrome(string);