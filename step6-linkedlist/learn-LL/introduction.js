class Node {
    constructor(data1, next1) {
        this.data = data1;
        this.next = next1;
    }
}

const x = new Node(2, 23);
console.log(x.data);
console.log(x.next);

// Array to LL -> time=O(n)
const arr = [2, 3, 5, 6];
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
console.log("After Converting Arr to LL -> Head -> ", arrToLL(arr));


//Traverse in LL -> Time=O(n)
let head = arrToLL(arr);
function traverseLL(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}
console.log("Traversing in LL ", traverseLL(head));

//Length of LL -> Time=O(n)
function lengthLL(head) {
    let temp = head;
    let count = 0;
    while (temp) {
        console.log(temp.data);
        temp = temp.next;
        count++;
    }
    return count;
}
console.log("Length of LL ", lengthLL(head));

//search in LL -> time=O(n)
function searchLL(head, el) {
    let temp = head;
    while (temp) {
        if (temp.data == el) return "yes";
        temp = temp.next;
    }
    return "no";
}
console.log("Element present in LL ->", searchLL(head, 5));