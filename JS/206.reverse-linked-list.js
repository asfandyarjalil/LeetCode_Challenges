// if (!this.head.next) {
//     return this.head;
//   }
//   let first = this.head;
//   this.tail = this.head;
//   let second = first.next;

//   while (second) {
//     const temp = second.next;
//     second.next = first;
//     first = second;
//     second = temp;
//   }

//   this.head.next = null;
//   this.head = first;
//   return this.printList();
// }

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let prev = null;
  let cur = head;
  let tmp;
  let tmpNext;
  while (cur !== null) {
    tmp = cur;
    tmpNext = cur.next;
    cur.next = prev;
    prev = tmp;
    cur = tmpNext;
  }

  return prev;
};
let node = new ListNode(2, null);
let res = reverseList(node);
