判断回文数/判断字符串是否对称
---
```
/**
* 判断回文数:
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。

* 输入：x = 121
* 输出：true
* 输入：x = -121
* 输出：false
* 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var num = String(x);
    var leftP = 0;
    var rightP = num.length - 1;
    while(leftP < rightP){
        if(num[leftP] != num[rightP]){
            return false
        }
        leftP ++
        rightP --
    }
    return true
};

var result = isPalindrome(1021)
// true
```
两数之和
---
```
/**
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 解题：
// 枚举每一个数为x，遍历寻找数组中是否存在 target - x
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i ++){
        for(var j = i + 1; j < nums.length; j ++){
            if(nums[i] === target - nums[j]){
                return [i, j]
            }
        }
    }

};

var nums = [22, 45, 3, 87, 4, 0, 76]
var result = twoSum(nums, 3)
console.log(result)
// [2, 5]
```
字符串翻转
---
```
function reverseStr(str) {
    // 字符串转化为数组
    let list = str.split('')
    let len = list.length
    // 定义左右指针，左从下标0开始，右从最后一位下标开始
    let left_p = 0
    let right_p = len - 1
    // 定义条件
    while (left_p < right_p) {
        // 定义一个容器去存放第一个要替换位置的元素
        let tem = list[left_p]
        // 左替换为右
        list[left_p] = list[right_p]
        // 右替换为左
        list[right_p] = tem
        // 左指针递增
        left_p++
        // 右指针递减
        right_p--
    }
    // 转回字符串
    return list.join('')
}

let str = '题法算转翻串符字道一是这'

console.log(reverseStr(str))

// 这是一道字符串翻转算法题
```
js快排
---
```
function sort(arr) {
    // 临界条件
    if (arr.length <= 1) return arr
    // 取基准点
    let index = Math.floor(arr.length / 2)
    // 取基准元素
    let cur = arr.splice(index, 1)[0]
    // 定义两个数组
    let left = []
    let right = []
    // 循环
    for (var i = 0; i < arr.length; i++) {
        // 元素小于基准元素，追加到left[]
        // 元素大于基准元素，追加到right[]
        if (arr[i] < cur) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    // 递归
    return sort(left).concat([cur], sort(right))
}

var arr = [3, 10, 4, 5, 6, 23, 50, 12, 44, 9]

console.log(sort(arr))

//[3, 4, 5, 6, 9, 10, 12, 23, 44, 50]
```
罗马数字转整数
---
```
/**
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
特殊情况
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let eg = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let sum = 0
    for(var i = 0; i < s.length;) {
        if(i + 1 < s.length && eg[s.substring(i, i + 2)]) {
            sum += eg[s.substring(i, i + 2)]
            i += 2
        }else{
            sum += eg[s.substring(i, i + 1)]
            i ++
        }
    }
    return sum
};
s = "MCMXCIV"//"IX"//"IV"//"XII"//"IV"//"III"
var result = romanToInt(s)
console.log(result) // 1994
```
合并两个有序链表
---
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 迭代
function mergeTwoList(l1, l2) {
    const head = {next: null}
    let p = head
    while(l1 && l2){
        if(l1.val < l2.val){
            p.next = l1
            l1 = l1.next
        }else{
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    p.next = l1 === null ? l2 : l1
    return head.next
}

// 递归
function mergeTwoLists(l1, l2) {
    if(l1 === null) {
        return l2
    }
    if(l2 === null) {
        return l1
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

var l1 = [1,2,4]
var l2 = [1,3,4]
console.log(mergeTwoLists(l1, l2)) // [1,1,2,3,4,4]
```
对角线打印二维数组
---
```
function findDiagonalOrder (nums) {
    if(!nums.length) return []
    let arr = [], result = []
    for(var i = 0; i < nums.length; i ++){
        let rows = nums[i]
        for(var j = 0; j < rows.length; j ++){
            if(!arr[i+j]) arr[i+j] = []
            arr[i+j].push(nums[i][j])
        }
    }
    for(const rows of arr){
        console.log('rows', rows)
        result.push(...rows.reverse())
    }
    return result
}
var list = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
// console.log(findDiagonalOrder(list))
// VM301525:18 rows [1]
// VM301525:18 rows (2) [2, 5]
// VM301525:18 rows (3) [3, 6, 9]
// VM301525:18 rows (4) [4, 7, 10, 13]
// VM301525:18 rows (3) [8, 11, 14]
// VM301525:18 rows (2) [12, 15]
// VM301525:18 rows [16]
// VM301525:23 (16) [1, 5, 2, 9, 6, 3, 13, 10, 7, 4, 14, 11, 8, 15, 12, 16]
```

二维数组扁平化
---
```
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var findDiagonalOrder = function (nums) {
    if (nums.length === 0) return [];
    let arrays = [], result = [];
      // 根据下标和 聚类
    for (let i = 0; i < nums.length; i++) {
      let rows = nums[i];
      for (let j = 0; j < rows.length; j++) {
        if (!arrays[i + j]) arrays[i + j] = [];
        arrays[i + j].push(nums[i][j]);
      }
    } 
    // 二维数组扁平化
    for (const rows of arrays) {
      result.push(...rows.reverse()); //注意这里每个子数组都是倒序的，需要反转
    }
    return result;
  };

//             [[1,2,3],                                 1
//              [4,5,6],    变成树                 4             2
//              [7,8,9]]                     7         5      null 3
//                                      null    8    null 6
//                                            null 9
var findDiagonalOrder = function(nums) {
    if(!nums||nums[0].length===0)return []
    let m=nums.length,queue=[],ans=[]
    //队列中存放的是个数组[元素值，行号，列号]，之所以这样是因为我们没有必要真的去构建一棵树
    //对于[a,i,j],他的左孩子就是[b,i+1,j],右孩子就是[c,i,j+1]
    queue.push([nums[0][0],0,0])
    while (queue.length>0){
        let data=queue.shift() //取出首元素
        ans.push(data[0]) //记录
        let i=data[1]+1,j=data[2]+1
        if(i<m&&data[2]<nums[i].length&&data[2]===0){ //左孩子如果有加入
            queue.push([nums[i][data[2]],i,data[2]])
        }
        if(data[1]<m&&j<nums[data[1]].length){ //右孩子如果有加入
            queue.push([nums[data[1]][j],data[1],j])
        }
    }
    return ans
};
```
打印/生成有效括号
---
```
/** 题目：
 * 输入1，输出['()']
 * 输入2，输出['()()', '(())']
 * 输入3，输出['()()()', '(()())', '(())()', '()(())', '((()))']
 */

list: 存放最终输出结果的数组
left: 已经生成的做括号个数
right: 已经生成的右括号个数
n: 需要生成括号的个数
result: 已经生成好的括号结果

function print(n) {
    let list = []
    function generate (left, right, n, result) {
        // 如果left和right都已经生成够了n个，则返回result
        if(left == n && right == n) {
            list.push(result)
        }
        // 如果left<n, 则生成一个左括号, left + 1, 递归
        if(left < n) {
            generate(left + 1, right, n, result+'(')
        }
        // 如果left>right(括号合法问题，先左后右), 并且right<n, 则生成一个右括号, right + 1, 递归
        if(left > right && right < n) {
            generate(left, right + 1, n , result+')')
        }
    }
    generate(0, 0, n, "")
    return list
}
```

判断有效的括号
---
```
/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    
};
```

杨辉三角
---
```
let generate = function(n) {
    if(!n) return []
    let list = [[1]]
    for(let i = 1; i < n; i ++) {
        list[i] = []
        for(let j = 0; j < i+1; j ++) {
            list[i][j] = (list[i-1][j] || 0) + (list[i-1][j-1] || 0)
        }
    }
    return list
}
/*
0: [1]
1: (2) [1, 1]
2: (3) [1, 2, 1]
3: (4) [1, 3, 3, 1]
4: (5) [1, 4, 6, 4, 1]
*/
```
翻转字符串
---
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

```
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]

var reverseList = function(s) {
    let n = s.length;
    for(var left = 0, right = n - 1; left < right; ++ left, -- right){
        [s[left], s[right]] = [s[right], s[left]]
    }
}
```

链表反转2(反转中间区域)
---
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

1. 因为头节点可能发生变化，使用虚拟头节点可以避免复杂的分类讨论； new ListNode(-1)
const dummyNode = new ListNode(-1);
dummyNode.next = head;
let pre = dummyNode;
2. 从虚拟头节点走left - 1 步，来到 left 的前一个节点，使用 for 循环；
for(let i = 0;  < left - 1; i ++){
    pre = pre.next;
}
3. 从 pre 再走 right-left+1 步，来到 right 节点，使用 for 循环；
let rightNode = pre;
for(let i = 0; i < right - left + 1; i ++){
    rightNode = rightNode.next;
}
4. 截取链表；leftNode；
let leftNode = pre.next;
let curr = rightNode.next;
5. 切断链接（置为null）；
pre.next = null;
rightNode.next = null;
6. 反转中间区域，同反转链表1题解；转leftNode；
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur){
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
7. 接回到原来的链表中
pre.next = rightNode;
leftNode.next = curr;
return dummyNode.next;
```
var reverseBetween = function(head, left, right) {
    // 虚拟头节点
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;
    
    let pre = dummyNode;
    // 从pre走到left-1节点；
    for(let i = 0; i < left - 1; i ++){
        pre = pre.next;
    }
    // 从pre走right-left+1步到right节点
    let rightNode = pre;
    for(let i = 0; i < right - left + 1; i ++){
        rightNode = rightNode.next;
    }
    // 截取子区间
    let leftNode = pre.next;
    let curr = rightNode.next;
    // 切断
    pre.next = null;
    rightNode.next = null;
    // 反转子区间
    reverseList(leftNode);
    // 拼接
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};
const reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur){
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
```
一堆数组的动态和（动态规划）
---
输入： [1,2,3,4,5]
输出： [1,3,6,10,15]

输入：[1,1,1,1,1]
输出：[1,2,3,4,5]
```
var runningSum = function(nums){
    let n = nums.length;
    for(let i = 1; i < n; i ++){
        nums[i] += nums[i-1]
    }
    return nums;
}
```

滑动窗口（动态规划）
---
给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

实现 MovingAverage 类：

MovingAverage(int size) 用窗口大小 size 初始化对象。
double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。

参考资料： https://zhuanlan.zhihu.com/p/419498264
```
var MovingAverage = function(size) {
    this.nums = []; // 队列初始化
    this.capacity = size; // 窗口长度
    this.sum = 0; // 总和
}

MovingAverage.prototype.next = function(val) {
    this.nums.push(val);
    this.sum += val;
    if(this.nums.length > this.capacity) {
        this.sum -= this.nums.shift();
    }
    return this.sum / this.nums.length;
}
```