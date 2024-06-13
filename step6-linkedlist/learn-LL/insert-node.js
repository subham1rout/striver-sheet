const prompt = require("prompt-sync")({ sigint: true });

class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}


//insert at first -> time=O(n) and space=O(1)
function insertNodeOnFirst(head, data) {
    return new Node(data, head);
}


//insert at last -> time=O(n) and space=O(1)
function insertAtLast(head, data) {
    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = new Node(data);
    return head;
}


//insert at kth position -> time=O(n) and space=O(1)
function insertAtKthPosition(head, data, k) {
    if (head == undefined) {
        return new Node(data);
    }
    if (k == 1) {
        return new Node(data, head);
    }
    let temp = head;
    let count = 0;
    while (temp) {
        count++;
        if (count == k - 1) {
            let x = new Node(data);
            x.next = temp.next;
            temp.next = x;
            break;
        }
        temp = temp.next;
    }
    return head;
}


//insert position which match a value of LL -> time=O(n) and space=O(1)
function insertBeforeValue(head, data, value) {
    if (head == undefined) {
        return new Node(data);
    }
    if (head.data == value) {
        return new Node(data, head);
    }
    let temp = head;
    while (temp.next) {
        if (temp.next.data == value) {
            let x = new Node(data);
            x.next = temp.next;
            temp.next = x;
            break;
        }
        temp = temp.next;
    }
    return head;
}


//execute func
let head = undefined;
let length = parseInt(prompt("enter the length of which you want LL:"));
for (let i = 0; i < length; i++) {
    head = insertNodeOnFirst(head, parseInt(prompt("enter value:")));
}
console.log("LinkedList -> ", JSON.stringify(head));
console.log("After inserting at first in LL ->", JSON.stringify(insertNodeOnFirst(head, 10)));
console.log("After inserting at last in LL ->", JSON.stringify(insertAtLast(head, 11)));
console.log("After inserting at kth in LL ->", JSON.stringify(insertAtKthPosition(head, 12, 4)));
console.log("After inserting having value in LL ->", JSON.stringify(insertBeforeValue(head, 13, 5)));