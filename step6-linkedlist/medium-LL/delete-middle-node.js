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
let head = arrTOLL(arr);

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

//brute -> time=O(n+n/2) and space=O(1)
function deleteMiddleNode(head) {
    let count = 0;
    let temp = head;
    while (temp) {
        count++;
        temp = temp.next;
    }
    let mid = Math.floor(count / 2);
    temp = head;
    while (temp) {
        mid--;
        if (mid == 0) {
            temp.next = temp.next.next;
            break;
        }
        temp = temp.next;
    }
    return head;
}
head = deleteMiddleNode(head);
console.log("Delete Middle Node -> ", printLL(head));


//optimal -> time=O(n) and space=O(1)
function deleteMiddleNodeOptimal(head) {
    let slow = head;
    let fast = head;
    fast = fast.next.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
}
head = deleteMiddleNodeOptimal(head);
console.log("Delete Middle Node -> ", printLL(head));