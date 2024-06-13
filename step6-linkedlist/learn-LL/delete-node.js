const prompt = require("prompt-sync")({ sigint: true });

//define node
class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}

//create the LL 
function insertNode(head, data) {
    let newnode = new Node(data);
    newnode.next = head;
    head = newnode;
    return head;
}

//delete from first of LL -> time=O(n) and space=O(1)
function deleteFirstNode(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    head = head.next;
    return head;
}

//delete from last in LL -> time=O(n) and space=O(1)
function deleteLastNode(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let temp = head;
    while (temp.next.next) {
        temp = temp.next;
    }
    temp.next = undefined;
    return head;
}

//delete from a kth position -> time=O(n) and space=O(1)
function deleteFromKthPosition(head, k) {
    if (head == undefined) {
        return undefined;
    }
    if (k == 1) {
        head = head.next;
        return head;
    }
    let temp = head;
    let count = 0;
    let prev = undefined;
    while (temp) {
        count++;
        if (count == k) {
            prev.next = prev.next.next;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}

//delete a value of LL -> time=O(n) and space=O(1)
function deleteElement(head, value) {
    if (head == undefined) return undefined;
    if (head.data == value) {
        head = head.next;
        return head;
    }
    let temp = head;
    let prev = undefined;
    while (temp) {
        if (temp.data == value) {
            prev.next = prev.next.next;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}

//execute func
let head = undefined;
let length = parseInt(prompt("enter the length of which you want LL:"));
for (let i = 0; i < length; i++) {
    head = insertNode(head, parseInt(prompt("enter value:")));
}


console.log("Before deleting last node from LL ->", JSON.stringify(head));
console.log("After deleting first node from LL ->", JSON.stringify(deleteFirstNode(head)));
console.log("After deleting last node from LL ->", JSON.stringify(deleteLastNode(head)));
console.log("After deleting kth node from LL ->", JSON.stringify(deleteFromKthPosition(head, 2)));
console.log("After deleting node having value from LL ->", JSON.stringify(deleteElement(head, 5)));