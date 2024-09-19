const prompt = require("prompt-sync")({ sigint: true });

//arr1
const length = parseInt(prompt("enter the length of LL:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the data:")));
}

//arr2
const length1 = parseInt(prompt("enter the length of LL1:"));
const arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt("enter the data:")));
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
let head1 = arrTOLL(arr1);

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

//brute ->  time=O(n)+O(nlogn)+O(n) and space=O(n)
function mergeSortedLL(head, head1) {
    let arr = [];
    let temp = head;
    while (temp) {
        arr.push(temp.data);
        temp = temp.next;
    }
    temp = head1;
    while (temp) {
        arr.push(temp.data);
        temp = temp.next;
    }
    if (arr.length == 0) return null;
    arr = arr.sort((a, b) => a - b);
    return arrTOLL(arr);
}
head = mergeSortedLL(head, head1);
console.log("Merge LL -> ", printLL(head));

//optimal ->
function mergeSortedLL1(head, head1) {
    let dummyNode = new Node(-1);
    let temp = dummyNode;
    let t1 = head;
    let t2 = head1;
    while (t1 && t2) {
        if (t1.data <= t2.data) {
            temp.next = t1;
            t1 = t1.next;
        } else {
            temp.next = t2;
            t2 = t2.next;
        }
        temp = temp.next;
    }
    if (t1) temp.next = t1;
    else temp.next = t2;
    return dummyNode.next;
}
head = mergeSortedLL1(head, head1);
console.log("Merge LL1 -> ", printLL(head));
