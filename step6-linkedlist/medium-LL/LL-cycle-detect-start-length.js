//we are not able to test this as it take one pointer to point back to one of node
//detect loop brute -> time=O(n*logn) and space=O(n)
function detectLoop(head) {
    let temp = head;
    let map = new Map();
    while (temp) {
        if (map.has(temp)) {
            return true;
        }
        map.set(temp, 1);
        temp = temp.next;
    }
    return false;
}
console.log("Detect Loop ->", detectLoop(head));


//detect loop optimal -> time=O(n)a and space=O(1) -> tortoise(slow) and hare(fast) pointer approach
function detectLoop1(head) {
    let tortoise = head;
    let hare = head;
    while (hare != null && hare.next != null) {
        tortoise = tortoise.next;
        hare = hare.next.next;
        if (tortoise == hare) {
            return true;
        }
    }
    return false;
}
console.log("Detect Loop ->", detectLoop1(head));


//starting point brute -> time=O(n*2*logn) and space=O(n)
function startingPointLoop(head) {
    let temp = head;
    let map = new Map();
    while (temp) {
        if (map.has(temp)) {
            return temp;
        }
        map.set(temp, 1);
        temp = temp.next;
    }
    return null;
}
console.log("Starting point of Loop ->", startingPointLoop(head));

//optimal ->. time=O(N) and space=O(1)
function startingPointLoop1(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
console.log("Starting point of Loop ->", startingPointLoop1(head));


//length of loop -> brute -> time=O(2n) in JS and space=O(1) time=O(2*n*logn) in other PL
function lengthOfLoop(head) {
    let map = new Map();
    let timer = 1;
    let temp = head;
    while (temp) {
        if (map.has(temp)) {
            let val = map.get(temp);
            return timer - val;
        }
        map.set(temp, timer);
        temp = temp.next;
        timer++;
    }
    return 0;
}

//optimal -> tortoise and hare approach -> time=O(n) and space=O(1)
function calculateLength(slow, fast) {
    slow = slow.next;
    let timer = 1;
    while (slow != fast) {
        timer++;
    }
    return timer;
}
function lengthOfLoop1(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return calculateLength(slow, fast);
        }
    }
    return 0;
}