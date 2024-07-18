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

//insert Before head -> time=O(1) and space=O(1)
function insertBeforeHead(head, data) {
    if (head == undefined) {
        return undefined;
    }
    let newHead = new Node(data);
    newHead.next = head;
    head.back = newHead;
    return newHead;
}
let data = parseInt(prompt('enter data to insert:'));
head = insertBeforeHead(head, data);
console.log("After inserting in head of DLL -> ", printDLL(head));

//insert Before Tail -> time=O(n) and space=O(1)
function insertBeforeTail(head, data) {
    if (head == undefined) {
        return undefined;
    }
    let temp = head.next;
    while (temp.next != undefined) {
        temp = temp.next;
    }
    let prev = temp.back;
    let newNode = new Node(data, temp, prev);
    prev.next = newNode;
    temp.back = newNode;
    return head;
}
let data1 = parseInt(prompt('enter data to insert:'));
head = insertBeforeTail(head, data1);
console.log("After inserting in tail of DLL -> ", printDLL(head));

//insert Before Kth Node of DLL -> time=O(n) and space=O(1)
function insertBeforeKthNode(head, data, k) {
    if (head == undefined) return undefined;
    if (k == 1) {
        return insertBeforeHead(head, data);
    }
    let temp = head;
    let count = 0;
    while (temp.next != undefined) {
        count++;
        if (count == k) {
            break;
        }
        temp = temp.next;
    }
    let prev = temp.back;
    let newNode = new Node(data, temp, prev);
    prev.next = newNode;
    temp.back = newNode;
    return head;
}
let data2 = parseInt(prompt('enter data to insert:'));
let k = parseInt(prompt('enter kth postion to insert:'));
head = insertBeforeKthNode(head, data2, k);
console.log("After inserting in kth Node of DLL -> ", printDLL(head));

//insert Before a Node of DLL -> time=O(1) and space=O(1)
function insertBeforeNode(node, value) {
    let prevNode = node.back;
    let newNode = new Node(value, node, prevNode);
    prevNode.next = newNode;
    node.back = newNode;
}
let data3 = parseInt(prompt('enter data to insert:'));
insertBeforeNode(head.next, data3);
console.log("After inserting Before a Node of DLL -> ", printDLL(head));