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

let head = undefined;
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3);
head = insertNode(head, 4);
console.log("After inserting into LL, head -> ", JSON.stringify(insertNode(head, 10)));