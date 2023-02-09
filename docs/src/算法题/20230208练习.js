// ! 滑动窗口 
/**
 * MovingAverage  size
 * prototype.next 右移窗口，右边+1，左边删1， 数量 size  / 平均
 */
var MovingAverage = function(size) {
    this.nums = [] // 数组push
    this.capacity = size // 容器
    this.sum = 0 // 计算总和
}
MovingAverage.prototype.next = function(val) {
    this.nums.push(val)
    this.sum += val
    if(this.nums.length > this.capacity){
        this.sum -= this.nums.shift()
    }
    return this.sum / this.nums.length
}
// ! 删除链表节点
/**
 * 给定一个单向链表的头节点和一个指定节点，删除该节点，返回链表的头指针
 * 
 * input: [1,2,3,4,5]  4
 * output: [1,2,3,5]
 * 
 * 利用指针next越过要删除的节点
 */
var deleteNode = function(head, val){
    if(head == null) return null
    if(head.val == val) return head.next
    let temp = head
    while(temp.next && temp.next.val !== val){
        temp = temp.next
    }
    if(temp.next.val === val){
        temp.next = temp.next.next
    }
    return head
}
// ! 反转链表
/**
 * 直接反转,需定义前一个节点，存储后一个节点
 */
// 一：迭代
var reverseNode = function(head) {
    let prev = null
    let curr = head
    while(curr){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
// 二：递归
var reverseList = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}

//! 合并两个有序链表
/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的,示例1：
 * input: 1->2->4, 1->3->4
 * output: 1->1->2->3->4->4
 * 
 * 新建一个头节点，同时新增一个node节点表示当前位置
 * 通过判断两个链表是否同时存在看是否遍历完了
 * 比较大小，并右移
 * 最后补上没遍历完的那个
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1)
    let node = head
    while(l1 && l2){
        if(l1 < l2){
            node.next = l1
            l1 = l1.next
        }else{
            node.next = l2
            l2.next
        }
        node = node.next
    }
    node.next = l1 === null ? l2 : l1
    return head.next
}
// ! 剑指offer合并排序链表（困难）
/**
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
    输出：[1,1,2,3,4,4,5,6]
    解释：链表数组如下：
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    将它们合并到一个有序链表中得到。
    1->1->2->3->4->4->5->6

    输入：lists = []
    输出：[]

    输入：lists = [[]]
    输出：[]
 * 
 */
var mergeKLists = function(lists) {
    if(lists === null) {
        return null
    }
    let n = lists.length
    if(n == 0) return null
    if(n == 1) return lists[0]
    for(var i = 1; i < n; i ++) {
        lists[i] = mergeTwoLists2(lists[i-1], lists[i])
    }
    return lists[n-1]
}
// 引用的合并方法同上一个算法题 mergeTwoLists
var mergeTwoLists2 = function(l1, l2) {
    let head = new ListNode()
    let node = head
    while(l1 && l2){
        if(l1.val < l2.val){
            node.next = l1
            l1 = l1.next
        }else{
            node.next = l2
            l2 = l2.next
        }
        node = node.next
    }
    node.next = l1 === null ? l2 : l1
    return head.next
}