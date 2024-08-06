const prompt = require("prompt-sync")({ sigint: true });

const length = parseInt(prompt("enter length of array:"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//arr to LL
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
function arrToLL(arr) {
    let head = new Node(arr[0]);
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        let newnode = new Node(arr[i]);
        temp.next = newnode;
        temp = temp.next;
    }
    return head;
}
let head = arrToLL(arr);

//palindrome check
class Stack {
    constructor() {
        this.arr = [];
    }
    push(data) {
        this.arr.push(data);
    }
    pop() {
        return this.arr.pop();
    }
}
function checkPalindrome(head) {
    let stack = new Stack();
    let temp = head;
    while (temp) {
        stack.push(temp.data);
        temp = temp.next;
    }
    temp = head;
    while (temp) {
        if (temp.data !== stack.pop()) {
            return false;
        }
        temp = temp.next;
    }
    return true;
}
console.log("Palindrom Check -> ", checkPalindrome(head));
