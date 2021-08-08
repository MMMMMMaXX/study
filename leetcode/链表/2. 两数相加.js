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
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0);
    let resNode = res;
    var temp = 0;
    var ifUp = 0;
    while(l1 || l2) {
        if(l1) {
            temp += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            temp += l2.val;
            l2 = l2.next;
        }
        if(ifUp === 1) {
            temp ++;
            ifUp = 0;
        }
        if(temp > 9) {
            temp = temp - 10;
            ifUp = 1;
        }
        res.next = new ListNode(temp);
        res = res.next;
        temp = 0;
    }
    if(ifUp === 1) {
        res.next = new ListNode(1);
    }
    return resNode.next;
};
console.log(addTwoNumbers([4],[6]));

/**
 * 链表问题
 */