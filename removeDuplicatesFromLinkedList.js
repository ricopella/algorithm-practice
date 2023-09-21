/*

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2]
Output: [1,2]
Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head) {
  if (head === null) return head;

  if (head.next === null) return head;

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // skip next (deletes duplicate)
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  // dont need to re-sort since it's already sorted
  return head;
}
