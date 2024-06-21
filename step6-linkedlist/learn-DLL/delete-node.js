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

const head = arrToDLL(arr);

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
console.log("After deleting head DLL -> ", deleteHead(head));