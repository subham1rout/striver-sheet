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

function printDLL(head){
    let temp=head;
    let DLL='';
    while(temp.next){
        DLL+=temp.data+'<->';
        temp=temp.next;
    }
    console.log(DLL);
}

//delete head of DLL -> time=O(1) and space=O(1)
function deleteHead(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let prev = head;
    head = head.next;
    head.back = undefined;
    prev.next = undefined;
    return head;
}
head = deleteHead(head);
console.log("After deleting head DLL -> ", printDLL(head));

//delete tail of DLL -> time=O(1) and space=O(1)
function deleteTail(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }
    let prev = temp.back;
    prev.next = undefined;
    temp.back = undefined;
    return head;
}
head = deleteTail(head);
console.log("After deleting tail of DLL -> ", printDLL(head));

//delete nth node of DLL -> time=O(1) and space=O(1)
function deleteNthNode(head, n) {
    printDLL(head)
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let count = 0;
    let temp = head;
    while (temp.next) {
        count++;
        if (count == n) {
            let prev = temp.back;
            let rear = temp.next;
            prev.next = rear;
            rear.back = prev;
            temp.next = undefined;
            rear.back = undefined;
            break;
        }
        temp = temp.next;
    }
    return head;
}
const n = parseInt(prompt("enter nth value="));
head = deleteNthNode(head, n);
console.log("After deleting nth Node of DLL -> ", printDLL(head));