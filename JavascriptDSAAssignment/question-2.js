// Write a program to create a function which takes two sorted linked lists in ascending order as an input 
// and returns a sorted linked list in ascending order. 
// Input:
//       list1= 2->1->3
//       list2=4->6->5
// Output :  sortedlist = 1->2->3->4->5->6


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
        if (this.head === null) return;

        let curr = this.head;
        let listValues = ``;
        while (curr) {
            listValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listValues);
    }

    mergeList(node, newNodeSize) {
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size += newNodeSize;
        this.sort();
    }

    sort() {
        let curr = this.head;
        while(curr) {
            let compareNode = this.head;
            while(compareNode){
                if(curr.value < compareNode.value){
                    var tmp = compareNode.value;
                    compareNode.value = curr.value;
                    curr.value = tmp;
                }
                compareNode = compareNode.next;
            }
            curr = curr.next;
        }
    }
}

// Creating an objects of a LinkedList;
const listOne = new LinkedList();
const listTwo = new LinkedList();

listOne.append(10);
listOne.append(20);
listOne.append(30);
listOne.append(40);
listOne.append(50);

console.log("First Linked List elements:");
listOne.print();

// inserting elements to the Second list;
listTwo.append(15);
listTwo.append(25);
listTwo.append(35);
listTwo.append(65);
listTwo.append(75);

console.log("Second Linked List elements:");
listTwo.print();

//merge Two List

console.log("Merging and sorting both Linked Lists:");
listOne.mergeList(listTwo.getHead(),listTwo.getSize());
listOne.print();