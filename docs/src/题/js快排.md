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