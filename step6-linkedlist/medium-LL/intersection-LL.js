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

//brute force -> time=O(n1logn1+n2logn2) and space=O(n1)
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

//better time=O(n1+n2+n2-n1+n1)=O(n1+2n2) and space=O(1)
function getConcatPoint(h1, h2, d) {
    while (d) {
        h2 = h2.next;
        d--;
    }
    while (h1 != h2) {
        h1 = h1.next;
        h2 = h2.next;
    }
    return h1;
}
function intersectingLL2(head, head2) {
    let temp1 = head;
    let temp2 = head2;
    let length1 = 0;
    let length2 = 0;
    while (temp1) {
        length1++;
        temp1 = temp1.next;
    }
    while (temp2) {
        length2++;
        temp2 = temp2.next;
    }
    if (length1 < length2) {
        return getConcatPoint(head, head2, length2 - length1);
    } else {
        return getConcatPoint(head2, head, length1 - length2);
    }
}
console.log("intersection point of 2 LL1 -> ", intersectingLL2(head, head2));

//optimal -> time=O(n1+n2) and space=O(1)
function intersectingLL3(head, head2) {
    if (head == null || head2 == null) return null;
    let temp1 = head;
    let temp2 = head2;
    while (temp1 != temp2) {
        temp1 = temp1.next;
        temp2 = temp2.next;
        if (temp1 == temp2) return temp1;
        if (temp1 == null) temp1 = head2;
        if (temp2 == null) temp2 = head;
    }
    return temp1;
}
console.log("intersection point of 2 LL2 -> ", intersectingLL3(head, head2));