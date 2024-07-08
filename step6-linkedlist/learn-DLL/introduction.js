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

function printDLL(head) {
    let temp = head;
    let string = '';
    while (temp) {
        string += temp.data + '->'
        temp = temp.next;
    }
    return string;
}

// Array to DLL -> time=O(n) and space=O(1)
function arrToDLL(arr) {
    let head = new Node(arr[0], undefined, undefined);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], undefined, prev);
        prev.next = temp;
        prev = temp;
    }
    return head;
}
let head = arrToDLL(arr);
console.log("Array to DLL -> ", printDLL(head));