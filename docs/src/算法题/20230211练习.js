// 给出一个数组a，查找key，返回key所在的位置
// 代码一
var find = function(a, key) {
    let n = a.length
    if(a == null || n <= 1) {
        return -1
    }
    let i = 0
    while(i < n) {
        if(a[i] == key) {
            return i
        }
        ++ i
    }
    return -1
}
// 代码二
var find2 = function(a, key) {
    let n = a.length
    if(a == null || n <= 1) {
        return -1
    }
    if(a[n-1] == key) {
        return n-1
    }
    let tmp = a[n-1]
    a[n-1] = key
    let i = 0
    while(a[i] != key) {
        ++ i
    }
    a[n-1] = tmp
    if(i == n-1) {
        return -1
    }else{
        return i
    }
}
/**
 * 单链表反转
 * 链表中环的检测
 * 两个有序的链表合并
 * 删除链表倒数第 n 个结点
 * 求链表的中间结点
 */

// 链表反转
var reverse = function(head) {
    let prev = null
    let cur = head
    while(cur) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}

// 判断链表中是否包含环形结构
// 标记法
// 给遍历过的节点打记号，如果遍历过程中遇到有记号的说明已环🤓
const hasCycle = function(head) {
  while (head) {
    if (head.tag) {
      return true;
    }
    head.tag = true;
    head = head.next;
  }
  return false;
};

// 鸡贼法
// 题目说了范围不超过100000，没超过size能发现空节点就是没有环， 超过了就是有环！！！
const hasCycle1 = function(head) {
  let i = 0, size = 100000
  let node = head
  while (++i <= size) {
    if(!node) return false
    node = node.next
  }
  return true;
};

// 快慢指针
// 快指针指向null，说明列表中没有环
// 快指针每次走两步，慢指针走一步，在某个时刻，如果存在环，快指针一定会在某一步追上慢指针实现套圈，即两个指针指向同一节点，返回true。
const hadCycle = function(head) {
    let fastHead = head
    let slowHead = head
    while(fastHead) {
        fastHead = fastHead.next
        slowHead = slowHead.next
        if(!fastHead) return false
        fastHead = fastHead.next
        if(fastHead == slowHead) return true
    }
    return false
}
// 给一个链表，返回链表入环的第一个节点，如果无环，返回null
// 哈希表
// 遍历，如果遇到遍历过的，就说明存在环。
var detectCycle = function(head) {
    const visited = new Set()
    while(head != null) {
        if(visited.has(head)) {
            return head
        }
        visited.add(head)
        head = head.next
    }
    return null
}

var simplifyPath = function(path) {

};
simplifyPath('/a/./b/../../c/')

// 重排链表
// 给定一个单链表，输入[1,2,3,4,5], 输出[1,5,2,4,3]
var reorderList = function(head) {
    if(head == null) return head
    let list = []
    let p = head
    while(p) {
        list.push(p)
        p = p.next
    }
    while(list.length > 2) {
        let l = list.shift()
        let r = list.pop()
        r.next = l.next
        l.next = r
    }
    list[list.length-1].next = null
}