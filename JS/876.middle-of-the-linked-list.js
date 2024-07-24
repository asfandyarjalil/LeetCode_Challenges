class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

var middleNode = function (linkedList) {
  //   console.log(head);
  let count = 1;
  let iter = linkedList.head;
  while (iter.next) {
    iter = iter.next;
    count++;
  }
  count = (count / 2) >> 0;
  let currentNode = linkedList.head;
  console.log(currentNode);
  while (count > 0) {
    currentNode = currentNode.next;
    count--;
  }
  return currentNode;
};

let res = middleNode(myLinkedList);
console.log(res);
