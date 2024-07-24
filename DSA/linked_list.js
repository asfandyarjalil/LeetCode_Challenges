// function SinglyLinkedListNode(data) {
//   this.data = data;
//   this.next = null;
// }

// function SinglyLinkedList() {
//   this.head = null;
//   this.size = 0;
// }

// SinglyLinkedList.prototype.isEmpty = function () {
//   return this.size === 0;
// };

// SinglyLinkedList.prototype.insert = function (value) {
//   if (this.head === null) {
//     this.head = new SinglyLinkedListNode(value);
//   } else {
//     let temp = this.head;
//     this.head = new SinglyLinkedListNode(value);
//     this.head.next = temp;
//   }
//   this.size++;
// };

class Node {
  constructor(data, next = null) {
    console.log("<<<<<<<<<<", next);
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    console.log(">>>", data);
    this.head = new Node(data, this.head);
    console.log(">>>", this.head);
  }

  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  //Print listdata
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

var sll1 = new LinkedList();
sll1.insertFirst(100);
sll1.insertFirst(200);
sll1.insertFirst(300);
sll1.printListData();
