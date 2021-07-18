import { ListNode, reverseKGroup, arrayToListNode } from './utils.mjs';

let x = new ListNode(1);
x.next = new ListNode(2);
x.next.next = new ListNode(3);
x.next.next.next = new ListNode(4);
x.next.next.next.next = new ListNode(5);
// x.next.next.next.next.next = new ListNode(6);

// debugger;
// console.log(reverseKGroup(x, 3).toArray());

console.log(arrayToListNode([1, 2, 3, 4, 5]).toArray());
