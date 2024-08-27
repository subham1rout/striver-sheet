const prompt = require("prompt-sync")({ sigint: true });

//arr
const length = parseInt(prompt("enter the length of LL:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the data:")));
}

class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}

//arr to LL
function arrToLL(arr) {
    let head = new Node(arr[0]);
    let mover = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]);
        mover.next = temp;
        mover = temp;
    }
    return head;
}
let head = arrToLL(arr);

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

//segregate on basis of odd and even node data -> GFG brute -> time=O(2n) and space=o(2n)
function segregateLL(head) {
    if (head == null || head.next == null) return head;
    let temp = head;
    let even = [];
    let odd = [];
    while (temp) {
        if (temp.data % 2 == 0) {
            even.push(temp.data);
        } else {
            odd.push(temp.data);
        }
        temp = temp.next;
    }
    let newhead = new Node(even[0]);
    temp = newhead;
    for (let i = 1; i < even.length; i++) {
        let newNode = new Node(even[i]);
        temp.next = newNode;
        temp = temp.next;
    }
    for (let i = 0; i < odd.length; i++) {
        let newNode = new Node(odd[i]);
        temp.next = newNode;
        temp = temp.next;
    }
    return newhead;
}
head = segregateLL(head);
console.log("Result LL ->", printLL(head));


//segregate even and odd index of LL -> Leetcode brute -> time=O(2n) and space=O(n)
function segregateLL1(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let arr = [];
    let temp = head;
    while (temp && temp.next) {
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp) arr.push(temp.data);
    temp = head.next;
    while (temp && temp.next) {
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp) arr.push(temp.data);
    temp = head;
    let i = 0;
    while (temp) {
        temp.data = arr[i];
        i++;
        temp = temp.next;
    }
    return head;
}
head = segregateLL1(head);
console.log("Result LL ->", printLL(head));

//segregate even and odd index of LL -> Leetcode optimal -> time=O(n) and space=O(1)
function segregateLL2(head) {
    if (head == null || head.next == null) return head;
    let odd = head;
    let even = head.next;
    let evenHead = head.next;
    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}
head = segregateLL2(head);
console.log("Result LL ->", printLL(head));