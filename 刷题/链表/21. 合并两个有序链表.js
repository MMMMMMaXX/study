// @ts-nocheck
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let first = new ListNode();
    let second = new ListNode();
    let res;
    let temp = new ListNode();
    first.next = l1;
    second.next = l2;
    res = temp;
    while (first.next || second.next) {
        if (first.next && second.next) {
            if (first.next.val < second.next.val) {
                temp.next = new ListNode(first.next.val);
                temp = temp.next;
            } else {
                temp.next = new ListNode(second.next.val);
                temp = temp.next;
            }
        } else if (first.next) {
            temp.next = new ListNode(first.next.val);
            temp = temp.next;
        } else {
            temp.next = new ListNode(second.next.val);
            temp = temp.next;
        }
    }
    return res.next;
};