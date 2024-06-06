class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}

function insertNode(head, data) {
    let newnode = new Node(data);
    newnode.next = head;
    head = newnode;
    return head;
}

function deleteLastNode(head) {
    let temp = head;
    while (temp.next) {
        console.log(temp.data);
        temp = temp.next;
    }
    temp = undefined;
    return head;
}

let head = undefined;
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3);
head = insertNode(head, 4);

console.log("Before deleting last node from LL ->", JSON.stringify(head));
console.log("After deleting last node from LL ->", JSON.stringify(deleteLastNode(head)));