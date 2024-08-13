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


//optimal -> tortoise and hare algorithm -> time=O(2n) and space=O(1)
function reverse(head) {
    let temp = head;
    let prev = undefined;
    while (temp) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}
function checkPalindrome1(head) {
    if (head == undefined || head.next == undefined) return head;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let newhead = reverse(slow.next);
    let temp = head;
    let temp1 = newhead;
    while (temp1) {
        if (temp.data !== temp1.data) {
            return false;
        }
        temp = temp.next;
        temp1 = temp1.next;
    }
    return true;
}
console.log("Palindrom1 Check -> ", checkPalindrome1(head));