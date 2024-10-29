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

//reverse LL
function reverseLL(head) {
    let prev = null;
    let temp = head;
    while (temp) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

//approach1 - time=O(3n) and space=O(1)
function addOne(head) {
    let tempH = head;
    let revH = reverseLL(tempH);
    let temp = revH;
    let carry = 1;
    while (temp) {
        let val = temp.data + carry;
        if (val < 10) {
            temp.data = val;
            carry=0;
            break;
        } else {
            temp.data = 0;
            carry = 1;
        }
        temp = temp.next;
    }
    revH = reverseLL(revH);
    if (carry == 1) {
        let newN = new Node(1, revH);
        return newN;
    }
    return revH;
}
console.log("LL->", printLL(head));
head = addOne(head);
console.log("LL after adding one=", printLL(head));


//approach2 - time=O(n) ans space=O(n)
function loop(head) {
    if (head == null) {
        return 1;
    }
    let carry = loop(head.next);
    let val = head.data + carry;
    if (val < 10) {
        head.data = val;
        carry = 0;
    } else {
        head.data = 0;
        carry = 1;
    }
    return carry;
}

function addOneRecursive(head) {
    let carry = loop(head);
    if (carry == 1) {
        let newN = new Node(1, head);
        return newN;
    }
    return head;
}
head = addOneRecursive(head);
console.log("LL2 after adding 1", printLL(head));