const prompt = require("prompt-sync")({ sigint: true });

//LL
const length = parseInt(prompt("Enter the LL1 length:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the value:")));
}

const length1 = parseInt(prompt("Enter the LL1 length:"));
const arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt("enter the value:")));
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
let head1 = arrToLL(arr1);

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


function addTwoNumbers(h1, h2) {
    let dummyNode = new Node(-1);
    let curr = dummyNode;
    let carry = 0;
    while (h1 != null || h2 != null) {
        let sum = carry;
        if (h1) sum += h1.data;
        if (h2) sum += h2.data;
        let newNode = new Node(sum % 10);
        curr.next = newNode;
        curr = curr.next;
        carry = Math.floor(sum / 10);
        if (h1) h1 = h1.next;
        if (h2) h2 = h2.next;
    }
    if (carry == 1) {
        let newN = new Node(1);
        curr.next = newN;
    }
    return dummyNode.next;
}
head = addTwoNumbers(head, head1);
console.log("Adding 2 numbers of LL =", printLL(head));
