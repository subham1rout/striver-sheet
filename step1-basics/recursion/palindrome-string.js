const prompt = require("prompt-sync")({ sigint: true });
let string = prompt("Enter a string:");

//check palindrome -> time=O(n) and space=O(n)
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


//reverse a string using recursion -> time=O(n) and space=O(n)
let temp = [];
function reverseString(s, l) {
    let r = s.length - 1 - l;
    if (l > r) return;
    temp[l] = s[r];
    temp[r] = s[l];
    reverseString(s, l + 1);
}

reverseString(string, 0);
console.log("Reverse String is ", temp.join(''));

//reverse a string -> time=O(n) and space=O(n)
let revarr = [];
function reverseString2(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        revarr.push(s[i]);
    }
}
reverseString2(string);
console.log("Reverse String using loop is ", revarr.join(''));

//check palindrome-2 -> time=O(n) and space=O(n)
// function checkPalindrome2(s) {
//     reverseString2(s);
//     let newstr = revarr.join('');
//     if (s == newstr) console.log("Palindrome!!");
//     else console.log("Not a palindrome!!");
// }

// checkPalindrome2(string);

//best way to check the palindrome -> time=O(n/2) and space=O(n/2)
function checkPalindrome3(s, index) {
    if (index >= Math.floor(s.length / 2)) return true;
    if (s[index] != s[s.length - index - 1]) return false;
    return checkPalindrome3(s, index + 1);
}

let result = checkPalindrome3(string, 0);
if (result == 1) console.log("Palindrome!!"); else console.log("Not a palindrome!!");