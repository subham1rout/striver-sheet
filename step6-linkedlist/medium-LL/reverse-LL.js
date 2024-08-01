const prompt = require("prompt-sync")({ sigint: true });

//input
const arr = [];
const length = parseInt(prompt("enter the length of the array:"));
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter number:")));
}

//Representation of DLL
class Node {
    constructor(data, next, back) {
        this.data = data;
        this.next = next;
    }
}

//construct DLL
function arrToLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], undefined, prev);
        prev.next = temp;
        prev = temp;
    }
    return head;
}
let head = arrToLL(arr);

function printLL(head) {
    let temp = head;
    let DLL = '';
    while (temp) {
        DLL += temp.data + '<->';
        temp = temp.next;
    }
    return DLL;
}

//reverse LL -> time=O(2n) and space=O(n)
class Stack {
    constructor() {
        this.items = [];
    }
    push(data) {
        this.items.push(data);
    }
    pop() {
        return this.items.pop();
    }
}
function reverseLL(head) {
    let temp = head;
    let newstack = new Stack();
    while (temp) {
        newstack.push(temp.data);
        temp = temp.next;
    }
    temp = head;
    while (temp) {
        temp.data = newstack.pop();
        temp = temp.next;
    }
    return head;
}
head = reverseLL(head);
console.log("Reverse LL ->", printLL(head));


//optimal -> time=O(n) and space=O(1)
function reverseLL1(head) {
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
head = reverseLL1(head);
console.log("Reverse LL 1->", printLL(head));