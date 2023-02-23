---
title: 目录
---

手写Object.create
---
思路：将传入的对象作为原型
```
function create(obj) {
    function F() {}
    f.prototype = obj
    return new F()
}
```
防抖(debounce)
---
[本博客面试题模块有解析](https://dreamlixia.github.io/blog/#/src/%E9%9D%A2%E8%AF%95%E9%A2%98/JavaScript.html#%E9%98%B2%E6%8A%96-debounce)

不管事件的触发频率有多高，一定在事件触发后的n秒后才执行，如果在n秒内再次触发了事件，那么以新的时间为准，n秒后再执行。
```
function debounce(event, time) {
    let timer = null
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            event.apply(this, args)
        }, time)
    }
}
```
有时候需要立即执行一次，再等后面事件触发后等待n秒执行。
```
function debounce1(event, time) {
    let timer = null
    let flag = true
    return function(...args) {
        if(flag && !timer) {
            event.apply(this, args)
            flag = false
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            event.apply(this, args)
        }, time)
    }
}
```
节流(throttle)
---
不管事件的触发频率有多高，只在单位时间内执行一次。
```
function throttle(event, time) {
    let timer = null
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer)
                event.apply(this, args)
            }, time)
        }
    }
}
```
时间戳方式 ？
```
function throttleTime(event, time) {
    let prev = 0
    let timer = null
    return function(...args) {
        if(Date.now() - prev > time) {
            clearTimeout(timer)
            event.apply(this, args)
            prev = Date.now()
        } else if(!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer)
                event.apply(this, args)
            }, time)
        }
    }
}
```
Promise
---
```
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
    this.state = PENDING
    this.value = null
    this.reason = null

    const resolve = (value) => {
        if(this.state == PENDING) {
            this.state = FULFILLED
            this.value = value
        }
    }
    const reject = (reason) => {
        if(this.state == PENDING) {
            this.state = REJECTED
            this.reason = reason
        }
    }

    try {
        executor && executor(resolve, reject)
    } catch (reason) {
        reject(reason)
    }
}
```
原生xhr
---
```

```
深浅拷贝
---
```

```
异步循环打印
---
```

```
call、apply、bind 
---
[牛客题解](https://www.nowcoder.com/profile/539362727/codeBookDetail?submissionId=118943499)
```

```
快排
---
```

```
去重
---
```

```
数组扁平化
---
递归、reduce
```

```
reduce使用场景(6种)
---
求和、求乘积、去重、计算元素在数组中出现的次数、将二维或多维数组转化成一维数组、数组对象里的属性求和

[本博客前端JS模块有解析](https://dreamlixia.github.io/blog/#/src/%E5%89%8D%E7%AB%AF/JS/ES6%E6%8A%80%E5%B7%A7/reduce.html)

求和
```
const arr = [1,2,3,4,5]
let sum = arr.reduce((pre, next) => {
    return pre + next
}, 0)
console.log(sum) // 15
```
求乘积
```
const arr = [1,2,3,4,5]
let product = arr.reduce((pre, next) => {
    return pre * next
})
console.log(product) // 120
```
去重
```const arr1 = [1,1,2,3,4,5,5,6]
const single = arr1.reduce((pre, cur) => {
    if(!pre.includes(cur)){
        return pre.concat(cur)
    } else {
        return pre
    }
}, [])
console.log(single) // [1, 2, 3, 4, 5, 6]
```
计算元素在数组中出现的次数
```
let nums = arr1.reduce((pre, next) => {
    if(next in pre) {
        pre[next] ++
    } else {
        pre[next] = 1
    }
    return pre
}, {})
console.log(nums) // {1: 2, 2: 1, 3: 1, 4: 1, 5: 2, 6: 1}
```
多维数组转化成一维数组
```
const arr2 = [1,2,[3,[4,[5],6]],7]
let flat = function(arr) {
    return arr.reduce((pre, next) => pre.concat(Array.isArray(next) ? flat(next) : next), [])
}
console.log(flat(arr2)) // [1, 2, 3, 4, 5, 6, 7]
```
二维数组转化成一维数组
```
const arr3 = [[1,2],[3,4],[5,6]]
const result = function(arr) {
    return arr.reduce((pre, next) => pre.concat(next))
}
console.log(result(arr3)) // [1, 2, 3, 4, 5, 6]
```
数组对象里的属性求和
```
let arrObj = [
    { name: 'name1', age: 10 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 30 },
    { name: 'name4', age: 40 },
]
let sums = function(arr, param) {
    return arr.reduce((pre, next) => (pre + next[param]), 0)
}
console.log(sums(arrObj, 'age')) // 100
```
斐波那契数列
---
[力扣原题](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/)

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

0,1,1,2,3,5,8,13,21,34,…… 从第三项开始，每一项都等于前两项之和。
```
var fib = function(n) {
    let data = 1000000007;
    if(n < 2) {
        return n;
    } else {
        let p = 0, q = 0, r = 1;
        for(var i = 2; i <= n; i ++) {
            p = q;
            q = r; 
            r = (p + q) % data;
        }
        return r;
    }
}
```
杨辉三角
---
```

```