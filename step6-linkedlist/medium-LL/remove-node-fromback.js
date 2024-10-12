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

//brute -> time=O(2n) and space=O(1)
function removeNodeFromBack(head, N) {
    let temp = head;
    let count = 0;
    while (temp) {
        count++;
        temp = temp.next;
    }
    if (count == N) {
        return head.next;
    }
    temp = head;
    let res = count - N;
    while (temp) {
        res--;
        if (res == 0) break;
        temp = temp.next;
    }
    temp.next = temp.next.next;
    return head;
}
let N = parseInt(prompt("enter the no from back which you want to delete:"));
head = removeNodeFromBack(head, N);
console.log("Remove node from back", printLL(head));

//optimal -> time= O(n) and space=O(1)
function removeNodeFromBackOptimal(head, N) {
    let fast = head;
    for (let i = 0; i < N; i++) {
        fast = fast.next;
    }
    let slow = head;
    if (fast == null) return head.next;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
}
let N1 = parseInt(prompt("enter the no from back which you want to delete:"));
head = removeNodeFromBack(head, N1);
console.log("Remove node from back", printLL(head));
