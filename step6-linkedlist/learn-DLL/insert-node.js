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

//insert in head
function insertInHead(head, data) {
    if (head == undefined) {
        return undefined;
    }
    let newHead = new Node(data);
    newHead.next = head;
    head.back = newHead;
    return newHead;
}
let data = parseInt(prompt('enter data to insert:'));
head = insertInHead(head, data);
console.log("After deleting head DLL -> ", printDLL(head));