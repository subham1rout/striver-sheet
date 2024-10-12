const prompt = require("prompt-sync")({ sigint: true });

//LL 1
const length = parseInt(prompt("Enter the LL1 length:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the value:")));
}

// LL2
const length2 = parseInt(prompt("Enter the LL2 length:"));
const arr2 = [];
for (let i = 0; i < length2; i++) {
    arr2.push(parseInt(prompt("enter the value:")));
}

//LL
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
const head = arrToLL(arr);
const head2 = arrToLL(arr2);

//printLL
function printLL(head) {
    let temp = head;
    let string = '';
    while (temp) {
        string += temp.data + ' -> ';
    }
    console.log(string);
}

//brute force 
function intersectingLL(head, head2) {
    let map = new Map();
    let temp = head;
    let temp2 = head2;
    while (temp) {
        map.set(temp, 1);
        temp = temp.next;
    }
    while (temp2) {
        if (map.has(temp2)) {
            return temp2.data;
        }
        temp2 = temp2.next;
    }
    return null;
}
console.log("intersection point of 2 LL -> ", intersectingLL(head, head2));
