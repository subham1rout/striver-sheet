const prompt = require("prompt-sync")({ sigint: true });

//arr
const length = parseInt(prompt("enter the length of LL:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the data:")));
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//convert arr to LL
function arrTOLL(arr) {
    let head = new Node(arr[0]);
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        temp.next = newNode;
        temp = temp.next;
    }
    return head;
}
const head = arrTOLL(arr);

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

//brute -> time=O(2n) and space=O(1)
function findMiddleLL(head) {
    let temp = head;
    let count = 0;
    while (temp) {
        count++;
        temp = temp.next;
    }
    let middle = Math.floor(count / 2) + 1;
    temp = head;
    count = 0;
    while (temp) {
        count++;
        if (count == middle) {
            break;
        }
        temp = temp.next;
    }
    return temp.data;
}
console.log("Middle of LL = ", findMiddleLL(head));

//TortoiseHare Method -> time=O(n/2) and space=O(1)
function findMiddleLL1(head) {
    let slow = head;
    let fast = head;
    while (fast != undefined && fast.next != undefined) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}
console.log("Middle of LL 1 = ", findMiddleLL1(head));