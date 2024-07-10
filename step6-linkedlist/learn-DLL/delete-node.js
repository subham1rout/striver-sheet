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

function printDLL(head) {
    let temp = head;
    let DLL = '';
    while (temp) {
        DLL += temp.data + '<->';
        temp = temp.next;
    }
    return DLL;
}

//delete head of DLL -> time=O(1) and space=O(1)
function deleteHead(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let temp = head;
    head = head.next;
    head.back = undefined;
    temp.next = undefined;
    return head;
}
head = deleteHead(head);
console.log("After deleting head DLL -> ", printDLL(head));

//delete tail of DLL -> time=O(n) and space=O(1)
function deleteTail(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let tail = head;
    while (tail.next) {
        tail = tail.next;
    }
    let prev = tail.back;
    prev.next = undefined;
    tail.back = undefined;
    return head;
}
head = deleteTail(head);
console.log("After deleting tail of DLL -> ", printDLL(head));

//delete nth node of DLL -> time=O(n) and space=O(1)
function deleteKthNode(head, k) {
    let temp = head;
    let count = 0;
    while (temp) {
        count++;
        if (k == count) break;
        temp = temp.next;
    }
    let prevNode = temp.back;
    let nextNode = temp.next;
    if (prevNode == undefined && nextNode == undefined) {
        return undefined;
    } else if (prevNode == undefined) {
        return deleteHead(head);
    } else if (nextNode == undefined) {
        return deleteTail(head);
    }
    prevNode.next = nextNode;
    nextNode.back = prevNode;
    temp.next = undefined;
    temp.back = undefined;
    return head;
}
const k = parseInt(prompt("enter which no node you want to delete="));
head = deleteKthNode(head, k);
console.log("After deleting kth Node of DLL -> ", printDLL(head));


//delete a node from DLL
function deleteNode(node) {
    let prevNode = node.back;
    let nextNode = node.next;
    if (nextNode == undefined) {
        prevNode.next = undefined;
        node.back = undefined;
        return head;
    }
    prevNode.next = nextNode;
    nextNode.back = prevNode;
    node.next = undefined;
    node.back = undefined;
    return head;
}
head = deleteNode(head.next.next);
console.log("After deleting kth Node of DLL -> ", printDLL(head));
