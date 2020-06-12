// SINGLY LINKED LIST
    // - add push method
    // - add pop method
    // - add shift method
    // - add unshift method
    // - add get method
    // - add set method
    // - add insert method
    // - add remove method
    // - add reverse method

// Node class
class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

// Singly Linked List class
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!val) return undefined;
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return true;
    }
}

var list = new SinglyLinkedList()
list.push("1st push");
list.push("2nd push");
console.log('list:', list);