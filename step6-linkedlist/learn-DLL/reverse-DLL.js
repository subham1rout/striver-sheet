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
        this.back = back;
    }
}

//construct DLL
function arrToDLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], undefined, prev);
        prev.next = temp;
        prev = temp;
    }
    return head;
}
let head = arrToDLL(arr);

//print DLL
function printDLL(head) {
    let temp = head;
    let DLL = '';
    while (temp) {
        DLL += temp.data + '<->';
        temp = temp.next;
    }
    return DLL;
}

//define stack
class Stack {
    constructor() {
        this.items = [];
    }
    push(number) {
        this.items.push(number);
    }
    pop() {
        if (this.items.length == 0) {
            return 'no element';
        }
        return this.items.pop();
    }
}

//brute -> time=O(2n) and space=O(n)
function reverse(head) {
    let newstack = new Stack();
    let temp = head;
    while (temp) {
        newstack.push(temp.data);
        temp = temp.next;
    }
    temp = head;
    while (temp) {
        let val = newstack.pop();
        temp.data = val;
        temp = temp.next;
    }
    return head;
}
head = reverse(head);
console.log("Reverse DLL = ", printDLL(head));

//optimal -> time=O(n) and space=O(1)
function reverse1(head) {
    let current = head;
    let temp = undefined;
    while (current) {
        temp = current.back;
        current.back = current.next;
        current.next = temp;
        current = current.back;
    }
    head = temp.back;
    return head;
}
head = reverse1(head);
console.log("Reverse DLL = ", printDLL(head));