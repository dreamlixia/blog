// 反转2
var reverseBetween = function(head, left, right){
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;
    for(let i = 0; i < left - 1; i ++){
        pre = pre.next;
    }

    let rightNode = pre;
    for(let i = 0; i < right - left + 1; i ++){
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let curr = rightNode.next;

    pre.next = null;
    rightNode.next = null;

    reverseListNode(LeftNode);

    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
}
const reverseListNode = function(head){
    let prev = null;
    let curr = head;
    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
// 合并两个排序的
var mergeTwoLists = function(l1, l2) {
    const head = { next: null }
    let p = head;
    while( l1 && l2 ){
        if(l1.val < l2.val){
            p.next = l1;
            l1 = l1.next;
        }else{
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    p.next = l1 === null ? l2 : l1;
    return head.next;
};
// 数组的动态和
var runningSum = function(nums){
    let n = nums.length;
    for(var i = 1; i < n; i ++){
        nums[i] += nums[i-1]
    }
    return nums;
}
// 动态规划滑动窗口
var MovingAverage = function(size) {
    this.nums = [];
    this.capacity = size;
    this.sum = 0;
}
MovingAverage.prototype.next = function(val) {
    this.nums.push(val);
    this.sum += val;
    if(this.nums.length > this.capacity){
        this.sum -= this.nums.unshift();
    }
    return this.sum / this.nums.length;
}
var MovingAverage = function(size) {
    // 数组模拟队列, 添加的值
    this.nums = [];
    // 初始化的时候使用者会告诉队列中窗口最大的长度size
    this.capacity = size;
    // 用来记录和的值
    this.sum =0;
};
MovingAverage.prototype.next = function(val) {
    // 当窗口没满的时候，把元素加入队列同时sum中记录和值即可，
    this.nums.push(val);
    this.sum+= val;
    // 当窗口满了的时候，把队首元素出队列，同时更新sum中的值（出队列的元素需从sum中减去）
    if(this.nums.length > this.capacity) {
        this.sum -=this.nums.shift()
    }
    // 根据题意“计算滑动窗口里所有数字的平均值”，所以是用sum/窗口大小
    return this.sum / this.nums.length;
};