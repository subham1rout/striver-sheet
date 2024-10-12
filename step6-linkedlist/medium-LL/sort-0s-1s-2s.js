const prompt = require("prompt-sync")({ sigint: true });

//arr
const length = parseInt(prompt("enter the length of LL:"));
const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt("enter the data:")));
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

//brute -> time=O(nlogn)+O(2n)
function segregate(head) {
    let temp = head;
    let arr = [];
    while (temp) {
        arr.push(temp.data);
        temp = temp.next;
    }
    arr.sort((a, b) => a - b);
    temp = head;
    let i = 0;
    while (temp) {
        temp.data = arr[i];
        i++;
        temp = temp.next;
    }
    return head;
}
head = segregate(head);
console.log("After Sorting -> ", printLL(head));

//better -> tim=O(2n) and space=O(1)
function segregate1(head) {
    let zeros = 0; //2
    let ones = 0; //3
    let twos = 0; //1
    let temp = head;
    while (temp) {
        length++;
        if (temp.data == 0) {
            zeros++;
        } else if (temp.data == 1) {
            ones++;
        } else if (temp.data == 2) {
            twos++;
        }
        temp = temp.next;
    }
    let i = 0;
    temp = head;
    while (temp) {
        if (i < zeros) {
            temp.data = 0;
        } else if (i < zeros + ones) {
            temp.data = 1;
        } else if (i < zeros + ones + twos) {
            temp.data = 2;
        }
        i++;
        temp = temp.next;
    }
    return head;
}
head = segregate1(head);
console.log("After Segregating -> ", printLL(head));

//better2 -> tim=O(2n) and space=O(1)
function segregate2(head) {
    let zeros = 0; //2
    let ones = 0; //3
    let twos = 0; //1
    let temp = head;
    while (temp) {
        length++;
        if (temp.data == 0) {
            zeros++;
        } else if (temp.data == 1) {
            ones++;
        } else if (temp.data == 2) {
            twos++;
        }
        temp = temp.next;
    }
    temp = head;
    while (temp) {
        if (zeros) {
            temp.data = 0;
            zeros--;
        } else if (ones) {
            temp.data = 1;
            ones--;
        } else {
            temp.data = 2;
            twos--;
        }
        temp = temp.next;
    }
    return head;
}
head = segregate2(head);
console.log("After Segregating -> ", printLL(head));

//optimal -> time=O(n) and space=O(1)
function segregate3(head) {
    let zeroH = new Node(-1);
    let oneH = new Node(-1);
    let twoH = new Node(-1);
    let temp = head;
    let zero = zeroH;
    let one = oneH;
    let two = twoH;
    while (temp) {
        if (temp.data == 0) {
            zero.next = temp;
            zero = temp;
        } else if (temp.data == 1) {
            one.next = temp;
            one = temp;
        } else {
            two.next = temp;
            two = temp;
        }
        temp = temp.next;
    }
    zero.next = (oneH.next) ? oneH.next : twoH.next;
    one.next = twoH.next;
    two.next = null;
    return zeroH.next;
}
head = segregate3(head);
console.log("After Segregating -> ", printLL(head));