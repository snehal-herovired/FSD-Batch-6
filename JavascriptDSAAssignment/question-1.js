// Question 1 : Write a program to reverse a linked list with a pointer given to head node as given below :
// Input : 1->2->3->4
// Output:4->3->2->1


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }
    isEmpty() { return this.size === 0 }
    getHead() { return this.head; }
    getSize() { return this.size; }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;

    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head;
            let listValues = ``;
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    reverse() {
            if(this.head === null) return;

            let curr = this.head;
            let prev = null;
            let next = null;

            while(curr){
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
                next = null;
            }
            this.head = prev;
    }
}

// Creating an object of a LinkedList;
const list = new LinkedList();

list.append(20);
list.append(60);
list.append(10);
list.append(70);
list.append(15);

console.log("Linked List elements:");
list.print();
// reverse the values in linkedlist
list.reverse(list.getHead());
console.log("Linked List after reversing the elements :");
list.print();