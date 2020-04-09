/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const arr = []

    const getNode = (node) => {
        if (node && node.val) {
            arr.push(node.val)

            if (node.next) {
                getNode(node.next)
            }
        }
    }
    getNode(l1)
    getNode(l2)


    if (arr.length) {
        return arr.sort((a, b) => a - b)
    } else {
        return []
    }
};

mergeTwoLists({ val: 1, next: { val: 2, next: { val: 4 } } }, { val: 1, next: { val: 3, next: { val: 4 } } }) // [ 1, 1, 2, 3, 4, 4 ]