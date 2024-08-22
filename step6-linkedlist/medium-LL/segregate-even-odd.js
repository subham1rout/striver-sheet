const prompt = require("prompt-sync")({ sigint: true });

//arr
const length = parseInt(prompt("enter the length of LL:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the data:")));
}

class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}

//arr to LL
function arrToLL(arr) {
    let head = new Node(arr[0]);
    let mover = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]);
        mover.next = temp;
        mover = temp;
    }
    return head;
}
let head = arrToLL(arr);

//print LL
function printLL(head) {
    let temp = head;
    let string = '';
    while (temp) {
        string += temp.data + ' -> ';
        temp = temp.next;
    }
    return string;
}
console.log("Given LL ->", printLL(head));

//segregate odd and even
function segregateLL(head) {
    let temp = head;
    let even = [];
    let odd = [];
    while (temp) {
        if (temp.data % 2 == 0) {
            even.push(temp.data);
        } else {
            odd.push(temp.data);
        }
        temp = temp.next;
    }
    let newhead = new Node(even[0]);
    temp = newhead;
    for (let i = 1; i < even.length; i++) {
        let newNode = new Node(even[i]);
        temp.next = newNode;
        temp = temp.next;
    }
    for (let i = 0; i < odd.length; i++) {
        let newNode = new Node(odd[i]);
        temp.next = newNode;
        temp = temp.next;
    }
    return newhead;
}
head = segregateLL(head);
console.log("Result LL ->", printLL(head));