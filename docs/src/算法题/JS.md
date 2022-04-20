#### 判断回文数/判断字符串是否对称
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

#### 两数之和
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

#### 字符串翻转
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

#### js快排
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

#### 罗马数字转整数
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

#### 对角线打印二维数组
---

```
```