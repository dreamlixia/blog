// !快速排序
var sort = function(arr) {
    let n = arr.length
    if(n <= 1) return arr
    let index = Math.floor(arr.length/2)
    let cur = arr.splice(index, 1)[0]
    let left = [], right = []
    for(var i = 0; i < n; i++) {
        if(arr[i] < cur) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sort(left).concat(cur, sort(right))
}
// !冒泡排序
var sort1 = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// !215. 数组中的第K个最大元素
/**
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1:

输入: [3,2,1,5,6,4], k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
 */
var findKthLargest = function(nums, k) {
    // 先排序，下标为n-k的值即为目标，需考虑负数情况
    nums.sort((a,b)=>a-b)
    let n = nums.length
    for(var i = n-1; i >= 0; --i) {
        if(n-k == i) {
            return nums[i]
        }
    }
}
// !判断回文链表
/**
 * head = [1,2,3,3,2,1]

将值push到数组中(遍历链表取val, 右移next)

双向遍历

比较值

不同返回false

否则跳出返回true
 */
var isPalindrome = function(head) {
    /**
     * 定义init数组
     * 遍历链表
     */
    let list = []
    while(head != null) {
        list.push(head.val)
        head = head.next
    }
    /**
     * 双向遍历数组
     * 比较值
     */
    let n = list.length
    for(var i=0,j=n-1; i<j; i++,j--) {
        if(list[i] !== list[j]) {
            return false
        }
    }
    return true
}