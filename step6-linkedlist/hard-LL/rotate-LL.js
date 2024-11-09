const prompt = require("prompt-sync")({ sigint: true });

//LL
const length = parseInt(prompt("Enter the LL1 length:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the value:")));
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//arr to LL
function arrToLL(arr) {
    let head;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            head = new Node(arr[i]);
            temp = head;
            continue;
        }
        let newNode = new Node(arr[i]);
        temp.next = newNode;
        temp = temp.next;
    }
    return head;
}
let head = arrToLL(arr);


//printLL
function printLL(head) {
    let temp = head;
    let LL = '';
    while (temp) {
        LL += temp.data + '->';
        temp = temp.next;
    }
    return LL;
}

//rotate LL
function getLastNode(head, k) {
    let count = 0;
    let temp = head;
    while (temp) {
        count++;
        if (count == k) return temp;
        temp = temp.next;
    }
    return temp;
}
function rotateLL(head, k) {
    if (head == null) return head;
    let tail = head;
    let len = 1;
    while (tail.next) {
        len++;
        tail = tail.next;
    }
    if (k % len == 0) return head;
    k = k % len;
    tail.next = head;
    let lastNode = getLastNode(head, len - k);
    head = lastNode.next;
    lastNode.next = null;
    return head;
}
const rotateNo = parseInt(prompt("Enter the rotation length:"));
head = rotateLL(head, rotateNo);
console.log("After Rotation LL=", printLL(head));
