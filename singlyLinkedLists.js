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

    pop() {
        console.log('popping');
        if (!this.head) return undefined;
        let currentNode = this.head;
        let newTail = currentNode;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    shift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.push(newNode);
        } else {
            let currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
        }
        this.length++;
        return true;
    }

    unshift(){
        console.log('length: ', this.length);
        if (this.length === 1) {
            this.pop();
        } else {
            const currentHead = this.head;
            this.head = currentHead.next;
        }
        this.length--;
        return true;
    }

    get(idx) {
        if (!this.head) return undefined;
        if (idx >= this.length) return undefined;
        let getCounter = 0;
        let currentNode = this.head;
        let nextNode = currentNode.next;
        while (getCounter !== idx) {
            currentNode = nextNode;
            nextNode = currentNode.next;
            getCounter++;
        }
        return currentNode;
    }

    set(idx, val) {
        if (!this.head) return undefined;
        if (idx >= this.length) return undefined;
        let nodeRetrieved = this.get(idx);
        nodeRetrieved.val = val;
        return true;
    }

    insert(idx, val) {        
        if (!this.head) {
            this.push(val);
            return true;
        } 
        if (idx >= this.length) return undefined;
        let nodeCount = 0;
        let newNode = new Node(val);
        if (idx === 0) {
            this.shift(newNode);
            return true;
        }
        if (idx === this.length-1) {
            this.push(newNode);
            return true;
        }
        let prevNode = this.head;
        let nextNode = prevNode.next;
        while (nodeCount < idx) {
            console.log('insert loop - ', nodeCount);
            prevNode = nextNode;
            nextNode = prevNode.next;
            nodeCount++;
        }
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx >= this.length) return undefined;
        if (idx === 0) {
            const removedNode = this.head;
            this.unshift();
            return removedNode;
        }
        if (idx === this.length-1) {
            const removedNode = this.tail;
            this.pop();
            return removedNode;
        }
        let nodeCount = 0;
        let prevNode = this.head;
        let nextNode = prevNode.next;
        while (nodeCount !== idx-1) {
            prevNode = nextNode;
            nextNode = prevNode.next;
            nodeCount++;
        }
        const removedNode = nextNode;
        prevNode.next = nextNode.next;
        this.length--;
        return removedNode;

    }

    reverse() {

    }

}

var list = new SinglyLinkedList()
list.push("1st - push");
list.push("2nd - push");
list.push("3rd - push");
list.push("4th - push");
// list.shift("4th - shift");
console.log('list:', list);
// list.unshift();

// console.log('list.set:', list.set(5, 'new val'));
// list.insert(3, 'inserted');
console.log('list.remove: ', list.remove(2));
console.log('list.get: ', list.get(1));
console.log('list.get: ', list.get(2));
// list.pop();
// list.pop();
console.log('list:', list);