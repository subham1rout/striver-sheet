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

//brute
function sortLL(head) {
    let temp = head;
    let arr = [];
    while (temp) {
        arr.push(temp.data);
        temp = temp.next;
    }
    arr = arr.sort((a, b) => a - b);
    temp = head;
    for (let i = 0; i < arr.length; i++) {
        temp.data = arr[i];
        temp = temp.next;
    }
    return head;
}
head = sortLL(head);
console.log("Sort LL -> ", printLL(head));


//optimal -> using merge sort
function getMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge(lefthead, righthead) {
    let dummyNode = new Node(-1);
    let temp = dummyNode;
    while (lefthead && righthead) {
        if (lefthead.data <= righthead.data) {
            temp.next = lefthead;
            lefthead = lefthead.next;
        } else {
            temp.next = righthead;
            righthead = righthead.next;
        }
        temp = temp.next;
    }
    if (lefthead) temp.next = lefthead;
    else temp.next = righthead;
    return dummyNode.next;
}

function mergeSort(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let middle = getMiddle(head);
    let lefthead = head;
    let righthead = middle.next;
    middle.next = null;
    lefthead = mergeSort(lefthead);
    righthead = mergeSort(righthead);
    return merge(lefthead, righthead);
}
mergeSort(head)
console.log("Sort LL1 -> ", printLL(head));