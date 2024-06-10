//define node
class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}

//create the LL
function insertNode(head, data) {
    let newnode = new Node(data);
    newnode.next = head;
    head = newnode;
    return head;
}

//delete from first of LL
function deleteFirstNode(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    head = head.next;
    return head;
}

//delete from last in LL
function deleteLastNode(head) {
    if (head == undefined || head.next == undefined) {
        return undefined;
    }
    let temp = head;
    while (temp.next.next) {
        temp = temp.next;
    }
    temp.next = undefined;
    return head;
}


//execute func
let head = undefined;
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3);
head = insertNode(head, 4);

console.log("Before deleting last node from LL ->", JSON.stringify(head));
console.log("After deleting first node from LL ->", JSON.stringify(deleteFirstNode(head)));
console.log("After deleting last node from LL ->", JSON.stringify(deleteLastNode(head)));